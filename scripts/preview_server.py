#!/usr/bin/env python3
"""Minimal static server for the docs/ folder (used by the preview tool)."""
import http.server
import os
import socketserver

DOCS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")
os.chdir(DOCS)

PORT = 4321


class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
