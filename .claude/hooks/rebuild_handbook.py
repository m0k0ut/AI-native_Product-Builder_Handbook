#!/usr/bin/env python3
"""PostToolUse hook: rebuild docs/content.js whenever AI-PM-Handbook.md is edited.

Reads the hook payload (JSON) on stdin and no-ops unless the edited file is the
handbook source. Picks the first Python interpreter that can ``import markdown``
so it keeps working whether or not a project virtualenv exists later.

Exit codes: 0 = nothing to do / rebuilt OK; 2 = build failed or no usable
interpreter (stderr is surfaced back to Claude).
"""
import json
import os
import shutil
import subprocess
import sys


def edited_path(payload):
    tool_input = payload.get("tool_input") or {}
    return (tool_input.get("file_path") or "").replace("\\", "/")


def find_interpreter(root):
    """First interpreter that can import markdown. Prefers a project venv."""
    candidates = [
        os.path.join(root, ".venv", "bin", "python"),
        os.path.join(root, "venv", "bin", "python"),
        sys.executable,
        "/usr/bin/python3",
        shutil.which("python3"),
        shutil.which("python"),
    ]
    seen = set()
    for cand in candidates:
        if not cand or cand in seen:
            continue
        seen.add(cand)
        if os.path.sep in cand and not os.path.exists(cand):
            continue
        try:
            probe = subprocess.run([cand, "-c", "import markdown"],
                                   capture_output=True)
        except Exception:
            continue
        if probe.returncode == 0:
            return cand
    return None


def main():
    try:
        payload = json.load(sys.stdin)
    except Exception:
        return 0  # malformed payload — don't interfere with the edit

    if not edited_path(payload).endswith("AI-PM-Handbook.md"):
        return 0

    root = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()
    interpreter = find_interpreter(root)
    if not interpreter:
        sys.stderr.write(
            "rebuild hook: no Python interpreter with the `markdown` library was "
            "found. Install it (e.g. `/usr/bin/python3 -m pip install --user "
            "markdown`) or create a .venv, then run scripts/build_site.py.\n")
        return 2

    build = os.path.join(root, "scripts", "build_site.py")
    result = subprocess.run([interpreter, build], cwd=root,
                            capture_output=True, text=True)
    sys.stdout.write(result.stdout)
    if result.returncode != 0:
        sys.stderr.write("rebuild hook: scripts/build_site.py failed:\n"
                         + result.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
