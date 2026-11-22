#!/usr/bin/env python3
"""Junta interface, estilo, código, hinos e logótipo num ÚNICO ficheiro index.html (para GitHub Pages)."""
import base64, os, sys
d = sys.argv[1] if len(sys.argv) > 1 else 'app/src/main/assets'
out = sys.argv[2] if len(sys.argv) > 2 else 'site/index.html'
r = lambda n: open(os.path.join(d, n), encoding='utf-8').read()
html = r('index.html')
css, hinos, app = r('style.css'), r('hinos.js'), r('app.js')
logo = 'data:image/png;base64,' + base64.b64encode(open(os.path.join(d, 'logo.png'), 'rb').read()).decode()
assert '</script' not in hinos.lower() and '</script' not in app.lower()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + css + '\n</style>')
html = html.replace('<script src="hinos.js"></script>', '<script>\n' + hinos + '</script>')
html = html.replace('<script src="app.js"></script>', '<script>\n' + app + '\n</script>')
html = html.replace('src="logo.png"', 'src="' + logo + '"')
for x in ('href="style.css"', 'src="app.js"', 'src="hinos.js"', 'logo.png'):
    assert x not in html, x
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out, 'w', encoding='utf-8').write(html)
print(out, round(len(html.encode()) / 1024), 'KB')
