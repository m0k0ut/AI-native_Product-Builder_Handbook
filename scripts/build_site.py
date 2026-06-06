#!/usr/bin/env python3
"""Parse AI-PM-Handbook.md into structured data for the static site (docs/content.js)."""
import json
import re
import html
import os
import markdown

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "AI-PM-Handbook.md")
OUT = os.path.join(ROOT, "docs", "content.js")

MD_EXT = ["tables", "sane_lists", "toc", "attr_list"]

def md2html(text):
    return markdown.markdown(text.strip(), extensions=MD_EXT, output_format="html5")

def slug(s):
    s = s.strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"\s+", "-", s).strip("-")

def plain(htmltext):
    t = re.sub(r"<[^>]+>", " ", htmltext)
    t = html.unescape(t)
    return re.sub(r"\s+", " ", t).strip()

GROUPS = [
    ("Product Management", [1, 2, 3]),
    ("AI Product Management", [4, 5, 6, 7, 8, 9]),
    ("Career & Resources", [10]),
]
GROUP_OF = {p: g for g, ps in GROUPS for p in ps}

def main():
    lines = open(SRC, encoding="utf-8").read().split("\n")

    # ---- locate top-level boundaries ----
    meta = {}
    parts = {}          # part-id -> dict
    pages = {}          # page-id -> dict
    order = []          # linear reading order of page-ids
    search = []

    # title / subtitle / stats (clean, fixed values for the hero)
    meta = {
        "title": "The PM & AI PM Handbook",
        "edition": "2026 Edition",
        "subtitle": "A practical guide to modern product thinking for PMs and AI PMs.",
        "stats": "10 Parts · 30 Chapters · 2 Glossaries",
    }

    # front-matter sections: Disclaimer, How to use  -> About page
    def grab_section(header):
        start = next((i for i, l in enumerate(lines) if l.strip() == header), None)
        if start is None:
            return ""
        body = []
        for l in lines[start + 1:]:
            if re.match(r"^#{1,2} ", l):
                break
            body.append(l)
        return "\n".join(body).strip()

    about_md = ("## How to use this handbook\n\n" + grab_section("## How to use this handbook")
                + "\n\n## Disclaimer\n\n" + grab_section("## Disclaimer"))
    about_html = md2html(about_md)
    pages["about"] = {"kind": "page", "title": "About this handbook",
                      "html": about_html, "text": plain(about_html)}

    # ---- split body into part blocks ----
    part_starts = [i for i, l in enumerate(lines) if re.match(r"^# Part \d+ ", l)]
    part_starts.append(len(lines))

    for pi in range(len(part_starts) - 1):
        block = lines[part_starts[pi]:part_starts[pi + 1]]
        head = block[0]
        m = re.match(r"^# Part (\d+) — (.+)$", head)
        pnum, ptitle = int(m.group(1)), m.group(2).strip()
        pid = f"part-{pnum}"
        group = GROUP_OF[pnum]

        # part intro = lines after heading until **IN THIS PART** / first ## / first ###
        intro = []
        rest_idx = 1
        for j in range(1, len(block)):
            s = block[j].strip()
            if s.startswith("**IN THIS PART**") or block[j].startswith("## ") or block[j].startswith("### "):
                rest_idx = j
                break
            intro.append(block[j])
            rest_idx = j + 1
        intro_html = md2html("\n".join(intro))

        chap_starts = [j for j in range(len(block)) if block[j].startswith("## Chapter ")]

        part_pages = []
        if chap_starts:
            chap_starts2 = chap_starts + [len(block)]
            for ci in range(len(chap_starts)):
                cblock = block[chap_starts[ci]:chap_starts2[ci + 1]]
                cm = re.match(r"^## Chapter (\d+) — (.+)$", cblock[0])
                cnum, ctitle = int(cm.group(1)), cm.group(2).strip()
                cid = f"chapter-{cnum}"
                body_html = md2html("\n".join(cblock[1:]))
                sections = [{"id": sid, "title": html.unescape(re.sub(r"<[^>]+>", "", stitle))}
                            for sid, stitle in re.findall(r'<h3 id="([^"]+)">(.*?)</h3>', body_html)]
                pages[cid] = {"kind": "chapter", "title": ctitle, "num": cnum,
                              "partId": pid, "partTitle": f"Part {pnum} · {ptitle}",
                              "html": body_html, "sections": sections}
                txt = plain(body_html)
                search.append({"pageId": cid, "anchor": "", "title": f"Ch {cnum} · {ctitle}",
                               "sub": ptitle, "kind": "chapter", "text": txt.lower()})
                for s in sections:
                    search.append({"pageId": cid, "anchor": s["id"], "title": s["title"],
                                   "sub": f"Ch {cnum} · {ctitle}", "kind": "section", "text": s["title"].lower()})
                part_pages.append(cid)
                order.append(cid)
            ptype = "chapters"
        else:
            # glossary part: parse ### letters + term bullets
            gid = f"glossary-{pnum}"
            letters = []
            cur = None
            gintro = []
            seen_letter = False
            for l in block[rest_idx:]:
                if l.startswith("### "):
                    seen_letter = True
                    cur = {"letter": l[4:].strip(), "terms": []}
                    letters.append(cur)
                elif not seen_letter:
                    gintro.append(l)
                else:
                    tm = re.match(r"^- \*\*(.+?)\*\*\s*—\s*(.+)$", l)
                    if tm and cur is not None:
                        term, dfn = tm.group(1).strip(), tm.group(2).strip()
                        tid = "t-" + slug(term)
                        dfn_html = md2html(dfn)
                        dfn_html = re.sub(r"^<p>|</p>$", "", dfn_html).strip()
                        cur["terms"].append({"id": tid, "term": term, "def": dfn_html})
                        search.append({"pageId": gid, "anchor": tid, "title": term,
                                       "sub": f"{ptitle}", "kind": "term", "text": (term + " " + dfn).lower()})
            allterms = " ".join(t["term"] + " " + plain(t["def"]) for L in letters for t in L["terms"])
            pages[gid] = {"kind": "glossary", "title": ptitle, "partId": pid,
                          "intro_html": md2html("\n".join(gintro)), "letters": letters,
                          "count": sum(len(L["terms"]) for L in letters)}
            search.append({"pageId": gid, "anchor": "", "title": ptitle, "sub": "Glossary",
                           "kind": "glossary", "text": allterms.lower()[:400]})
            part_pages.append(gid)
            order.append(gid)
            ptype = "glossary"

        parts[pid] = {"num": pnum, "title": ptitle, "group": group,
                      "intro_html": intro_html, "pages": part_pages, "type": ptype,
                      "count": len(part_pages) if ptype == "chapters" else pages[part_pages[0]]["count"]}

    groups = [{"label": g, "parts": [f"part-{p}" for p in ps]} for g, ps in GROUPS]

    data = {"meta": meta, "groups": groups, "parts": parts,
            "pages": pages, "order": order, "search": search}

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.HANDBOOK = " + json.dumps(data, ensure_ascii=False) + ";\n")

    print(f"parts={len(parts)} pages={len(pages)} order={len(order)} search={len(search)}")
    gl = [p for p in pages.values() if p.get("kind") == "glossary"]
    print("glossary term counts:", [g["count"] for g in gl])
    print(f"content.js: {os.path.getsize(OUT)//1024} KB")

if __name__ == "__main__":
    main()
