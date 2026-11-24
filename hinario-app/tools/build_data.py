#!/usr/bin/env python3
"""hinos.json -> www/hinos.js (dados embutidos, funciona offline e sem servidor)."""
import json, sys
src, dst = sys.argv[1], sys.argv[2]
H = json.load(open(src, encoding='utf-8'))
import re
from collections import Counter
# nomes próprios: palavras que, na letra dos hinos, aparecem quase sempre com maiúscula (fora do início de linha)
cap, tot = Counter(), Counter()
for h in H:
    for b in h['blocos']:
        for l in b['lines']:
            for i, w in enumerate(re.findall(r"[^\W\d_]+", l)):
                if i == 0: continue
                tot[w.lower()] += 1
                if w[0].isupper(): cap[w.lower()] += 1
proprios = {w for w in tot if tot[w] >= 3 and cap[w] / tot[w] >= 0.6}
def sentenca(t):
    pal = re.split(r'(\s+)', t.lower())
    r = []
    for k, w in enumerate(pal):
        base = re.sub(r"[^\w]", '', w)
        if (k == 0 or base in proprios) and w:
            w = w[:1].upper() + w[1:]
        r.append(w)
    return ''.join(r)
out = []
for h in H:
    t = sentenca(h['titulo'].strip())
    blocos = []
    n = 0
    for b in h['blocos']:
        if b['type'] == 'verse':
            n += 1
            blocos.append({'t': 'v', 'n': b['num'] or n, 'l': b['lines']})
        else:
            blocos.append({'t': 'c', 'l': b['lines']})
    out.append({'n': h['numero'], 'ti': t, 'b': blocos})
with open(dst, 'w', encoding='utf-8') as f:
    f.write('window.HINOS=' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(out), 'hinos')
