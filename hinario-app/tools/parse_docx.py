#!/usr/bin/env python3
"""Converte o documento Word do Hinário Tchokwe em hinos.json (estruturado)."""
import sys, re, json, docx

src, dst = sys.argv[1], sys.argv[2]
d = docx.Document(src)
paras = []
for p in d.paragraphs:
    t = re.sub(r'[ \t\xa0]+', ' ', p.text).strip()
    ital = any(r.italic for r in p.runs if r.text.strip())
    paras.append((t, ital))
P = [t for t, _ in paras]

def upper(s):
    L = [c for c in s if c.isalpha()]
    return len(L) >= 3 and sum(c.isupper() for c in L) / len(L) > 0.8

def is_verse_marker(t):
    return re.match(r'^(\d{1,2})\s*[\.\)]?\s*(.*)$', t)

# --- 1. cabeçalhos ---
headers = []   # (num, idx_inicio, idx_primeira_linha_corpo, titulo)
exp = 1
i = 0
while i < len(P):
    t = P[i]
    m = re.match(r'^(\d+)\s*[\.\)]?\s*(.*)$', t)
    ok = False
    if m:
        n = int(m.group(1)); rest = m.group(2).strip()
        num_ok = (n == exp) or (rest == '' and len(str(n)) < len(str(exp)) and str(exp).startswith(str(n)))
        if num_ok:
            title_lines = []
            j = i + 1
            if rest:
                if upper(rest): title_lines.append(rest)
            else:
                while j < len(P) and not P[j]: j += 1
                k = j
                if k < len(P) and upper(P[k]) and P[k] != 'UTAWIZO':
                    title_lines.append(P[k]); j = k + 1
            if title_lines:
                # continuação do título (máx. 2 linhas extra)
                while (j < len(P) and len(title_lines) < 3 and P[j] and upper(P[j])
                       and P[j] != 'UTAWIZO' and not is_verse_marker(P[j])):
                    title_lines.append(P[j]); j += 1
                headers.append((exp, i, j, ' '.join(title_lines)))
                exp += 1
                i = j
                continue
    i += 1

# --- 2. corpo ---
hymns = []
for h, (num, start, body_start, title) in enumerate(headers):
    end = headers[h + 1][1] if h + 1 < len(headers) else len(P)
    blocks = []
    cur = None  # bloco corrente
    in_chorus_italics = False
    def flush():
        global cur
        if cur and cur['lines']:
            blocks.append(cur)
        cur = None
    for k in range(body_start, end):
        t, ital = paras[k]
        if not t:
            if cur and cur['lines']:
                cur['_blank'] = True
            continue
        if re.match(r'^UTAWIZO\.?:?$', t, re.I):
            flush(); cur = {'type': 'chorus', 'lines': []}; continue
        m = is_verse_marker(t)
        if m and not (cur and cur['type']=='chorus' and ital):
            vn, rest = int(m.group(1)), m.group(2).strip()
            if vn <= 12 and (rest == '' or not re.match(r'^[,;:]', rest)):
                flush(); cur = {'type': 'verse', 'num': vn, 'lines': []}
                if rest: cur['lines'].append(rest)
                continue
        if cur is None:
            cur = {'type': 'verse', 'num': None, 'lines': []}
        # um coro termina quando surge linha não-itálica após linha em branco
        if cur['type'] == 'chorus' and cur.get('_blank') and not ital:
            flush(); cur = {'type': 'verse', 'num': None, 'lines': []}
        cur['lines'].append(t)
        cur.pop('_blank', None)
    flush()
    for b in blocks: b.pop('_blank', None)
    # numeração: versos sem número passam a ser contínuos
    hymns.append({'numero': num, 'titulo': title, 'blocos': blocks})

json.dump(hymns, open(dst, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('hinos:', len(hymns))
