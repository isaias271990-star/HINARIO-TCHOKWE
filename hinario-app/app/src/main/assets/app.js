/*
 * Hinário Tchokwe — IASD, Missão Leste de Angola
 * Desenvolvedor: Isaías Muwaneno · Colaboradores: Januário Justo Miranda, Ecal Gomes, Pastor Nunes Sacavumbi Lucas
 * © 2026 Missão Leste de Angola. Todos os direitos reservados.
 */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- armazenamento (à prova de falhas) ---------- */
  function ler(k, def) { try { var v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } }
  function gravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function apagarChave(k) { try { localStorage.removeItem(k); } catch (e) {} }

  /* ---------- dados ---------- */
  var ORIGINAIS = window.HINOS || [];
  var HINOS = [];
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function preparar(h) {
    h.nt = norm(h.ti);
    var linhas = [];
    h.b.forEach(function (b) { b.l.forEach(function (l) { linhas.push(l); }); });
    h.linhas = linhas; h.nl = linhas.map(norm); h.primeira = linhas[0] || '';
    return h;
  }
  function limpo(h) { return { n: h.n, ti: h.ti, b: h.b }; }
  function carregar() {
    var base = ler('hinos_custom', null);
    if (!Array.isArray(base) || !base.length) base = ORIGINAIS;
    HINOS = base.map(function (h) { return preparar({ n: h.n, ti: h.ti, b: h.b }); })
      .sort(function (a, b) { return a.n - b.n; });
  }
  function guardarTodos() { return gravar('hinos_custom', HINOS.map(limpo)); }
  function porNumero(n) { for (var i = 0; i < HINOS.length; i++) if (HINOS[i].n === n) return HINOS[i]; return null; }
  function indice(n) { for (var i = 0; i < HINOS.length; i++) if (HINOS[i].n === n) return i; return -1; }

  var favoritos = ler('favoritos', []);
  var tamanho = ler('tamanho', 19);
  var tema = ler('tema', 'auto');
  var aba = 'todos';
  var atual = null;
  var admin = false;

  /* ---------- ecrãs ---------- */
  var TELAS = ['capa', 'sobre', 'lista', 'hino', 'login', 'editor', 'gestao'];
  var telaAtual = 'capa';
  function mostrar(nome) {
    TELAS.forEach(function (t) { $('tela-' + t).hidden = (t !== nome); });
    telaAtual = nome;
    atualizarAdminUI();
  }
  function atualizarAdminUI() {
    $('faixa-admin').hidden = !admin;
    $('admin-hino').hidden = !(admin && atual);
  }

  /* ---------- avisos e confirmações (dentro da página) ---------- */
  var tAviso = null;
  function aviso(txt) {
    var a = document.querySelector('.aviso'); if (a) a.remove();
    a = document.createElement('div'); a.className = 'aviso'; a.textContent = txt; document.body.appendChild(a);
    clearTimeout(tAviso); tAviso = setTimeout(function () { a.remove(); }, 2600);
  }
  function confirmar(msg, okTxt, perigo) {
    return new Promise(function (res) {
      var v = document.createElement('div'); v.className = 'veu';
      v.innerHTML = '<div class="caixa" role="dialog" aria-modal="true"><p></p><div class="acoes">' +
        '<button class="nao">Cancelar</button><button class="sim' + (perigo ? ' perigo' : '') + '"></button></div></div>';
      v.querySelector('p').textContent = msg;
      v.querySelector('.sim').textContent = okTxt || 'OK';
      function fim(r) { v.remove(); res(r); }
      v.querySelector('.nao').onclick = function () { fim(false); };
      v.querySelector('.sim').onclick = function () { fim(true); };
      document.body.appendChild(v);
      v.dataset.cancelar = '1'; v._fechar = function () { fim(false); };
    });
  }
  function janelaAberta() { return document.querySelector('.veu'); }

  /* ---------- tema e letra ---------- */
  function aplicarTema() {
    var r = document.documentElement;
    if (tema === 'auto') r.removeAttribute('data-tema'); else r.setAttribute('data-tema', tema);
    var escuro = tema === 'escuro' || (tema === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    var m = document.querySelector('meta[name=theme-color]'); if (m) m.content = escuro ? '#111719' : '#00758d';
  }
  function aplicarTamanho() {
    document.documentElement.style.setProperty('--fs', tamanho + 'px');
    $('fonte-menos').disabled = tamanho <= 14; $('fonte-mais').disabled = tamanho >= 36;
  }
  $('btn-tema').onclick = function () {
    tema = tema === 'auto' ? 'escuro' : tema === 'escuro' ? 'claro' : 'auto';
    gravar('tema', tema); aplicarTema(); aviso('Tema: ' + (tema === 'auto' ? 'automático' : tema));
  };
  $('fonte-menos').onclick = function () { tamanho = Math.max(14, tamanho - 2); gravar('tamanho', tamanho); aplicarTamanho(); };
  $('fonte-mais').onclick = function () { tamanho = Math.min(36, tamanho + 2); gravar('tamanho', tamanho); aplicarTamanho(); };

  /* ---------- capa ---------- */
  (function () {
    var img = $('logo'), res = $('logo-reserva');
    function falhou() { img.setAttribute('hidden', ''); res.removeAttribute('hidden'); }
    img.addEventListener('error', falhou);
    if (img.complete && img.naturalWidth === 0) falhou();
  })();
  // Na versão web mostra o atalho para descarregar o APK; dentro do aplicativo não faz sentido.
  (function () { var l = $('baixar-apk'); if (l && !window.AndroidApp && /Android/i.test(navigator.userAgent)) l.hidden = false; })();
  $('entrar').onclick = function () { mostrar('lista'); };
  // O acesso de administrador foi retirado da capa (o código fica inativo e pode ser reativado).
  var btnAdmin = $('ir-admin'); if (btnAdmin) btnAdmin.onclick = function () { abrirLogin('capa'); };
  $('ir-sobre').onclick = function () { mostrar('sobre'); };
  $('sobre-voltar').onclick = function () { mostrar('capa'); };

  /* ---------- lista e pesquisa ---------- */
  function item(h, q, snippet) {
    var fav = favoritos.indexOf(h.n) >= 0;
    return '<button class="item" data-n="' + h.n + '">' +
      '<span class="num">' + h.n + '</span>' +
      '<span class="item-tx"><div class="item-ti">' + destacar(h.ti, q) + '</div>' +
      '<div class="item-sn">' + (snippet ? destacar(snippet, q) : esc(h.primeira)) + '</div></span>' +
      (fav ? '<span class="item-fav" aria-label="Favorito">★</span>' : '') + '</button>';
  }
  function destacar(txt, q) {
    if (!q) return esc(txt);
    var nt = norm(txt), i = nt.indexOf(q);
    if (i < 0 || nt.length !== txt.length) return esc(txt);
    return esc(txt.slice(0, i)) + '<mark>' + esc(txt.slice(i, i + q.length)) + '</mark>' + esc(txt.slice(i + q.length));
  }
  function desenharLista() {
    var raw = $('busca').value.trim(), q = norm(raw);
    $('limpar').hidden = !raw;
    var base = aba === 'fav' ? HINOS.filter(function (h) { return favoritos.indexOf(h.n) >= 0; }) : HINOS;
    var html = '';
    if (!HINOS.length && !q && aba === 'todos') {
      $('lista').innerHTML = '<div class="vazio">Os hinos não foram carregados.<br>Verifique se o ficheiro <b>hinos.js</b> está na mesma pasta que o index.html.</div>';
      $('cont-fav').textContent = '';
      return;
    }
    if (!q) {
      html = base.map(function (h) { return item(h, ''); }).join('');
      if (!html) html = '<div class="vazio">' + (aba === 'fav'
        ? 'Ainda não tem favoritos.<br>Abra um hino e toque em ☆ para o guardar aqui.' : 'Sem hinos.') + '</div>';
    } else {
      var porNum = [], porTitulo = [], porLetra = [];
      base.forEach(function (h) {
        if (/^\d+$/.test(q) && String(h.n) === q) { porNum.push(item(h, '')); return; }
        if (h.nt.indexOf(q) >= 0) { porTitulo.push(item(h, q)); return; }
        for (var i = 0; i < h.nl.length; i++) {
          if (h.nl[i].indexOf(q) >= 0) { porLetra.push(item(h, q, h.linhas[i])); return; }
        }
      });
      html = porNum.concat(porTitulo, porLetra).join('');
      if (!html) html = '<div class="vazio">Nenhum hino encontrado para “' + esc(raw) + '”.</div>';
    }
    $('lista').innerHTML = html;
    $('cont-fav').textContent = favoritos.length ? '(' + favoritos.length + ')' : '';
  }
  $('busca').addEventListener('input', function () { $('lista').scrollTop = 0; desenharLista(); });
  $('limpar').onclick = function () { $('busca').value = ''; desenharLista(); $('busca').focus(); };
  $('busca').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var q = $('busca').value.trim();
      if (/^\d+$/.test(q) && porNumero(+q)) abrir(+q);
      $('busca').blur();
    }
  });
  function trocarAba(a) {
    aba = a;
    $('aba-todos').classList.toggle('ativa', a === 'todos'); $('aba-fav').classList.toggle('ativa', a === 'fav');
    $('aba-todos').setAttribute('aria-selected', a === 'todos'); $('aba-fav').setAttribute('aria-selected', a === 'fav');
    $('lista').scrollTop = 0; desenharLista();
  }
  $('aba-todos').onclick = function () { trocarAba('todos'); };
  $('aba-fav').onclick = function () { trocarAba('fav'); };
  $('lista').addEventListener('click', function (e) { var b = e.target.closest('.item'); if (b) abrir(+b.dataset.n); });

  /* ---------- hino ---------- */
  var scrollLista = 0;
  function textoHino(h) {
    var t = h.n + '. ' + h.ti + '\n\n';
    h.b.forEach(function (b) { t += (b.t === 'c' ? 'Utawizo' : String(b.n)) + '\n' + b.l.join('\n') + '\n\n'; });
    return t.trim() + '\n\n— Hinário Tchokwe · IASD Missão Leste de Angola';
  }
  function abrir(n) {
    var h = porNumero(n); if (!h) return;
    if (!atual) scrollLista = $('lista').scrollTop;
    atual = h;
    $('h-num').textContent = 'Hino ' + h.n;
    $('h-titulo').textContent = h.ti;
    $('letra').innerHTML = h.b.map(function (b) {
      var cab = b.t === 'c' ? 'Utawizo' : String(b.n);
      return '<div class="bloco ' + (b.t === 'c' ? 'coro' : 'verso') + '"><span class="vnum">' + cab + '</span>' +
        b.l.map(function (l) { return '<span class="linha">' + esc(l) + '</span>'; }).join('') + '</div>';
    }).join('');
    $('letra').scrollTop = 0;
    mostrar('hino');
    var i = indice(n);
    $('ant').disabled = i <= 0; $('seg').disabled = i >= HINOS.length - 1;
    marcarFav();
    gravar('ultimo', n);
    try { history.replaceState(null, '', '#h' + n); } catch (e) {}
  }
  function fechar() {
    atual = null;
    mostrar('lista');
    desenharLista();
    $('lista').scrollTop = scrollLista;
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  function marcarFav() {
    var f = atual && favoritos.indexOf(atual.n) >= 0;
    $('btn-fav').textContent = f ? '★' : '☆';
    $('btn-fav').setAttribute('aria-pressed', f ? 'true' : 'false');
    $('btn-fav').setAttribute('aria-label', f ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
  }
  $('btn-fav').onclick = function () {
    if (!atual) return;
    var i = favoritos.indexOf(atual.n);
    if (i >= 0) favoritos.splice(i, 1); else favoritos.push(atual.n);
    favoritos.sort(function (a, b) { return a - b; });
    gravar('favoritos', favoritos); marcarFav();
  };
  $('voltar').onclick = fechar;
  $('ant').onclick = function () { if (atual) { var i = indice(atual.n); if (i > 0) abrir(HINOS[i - 1].n); } };
  $('seg').onclick = function () { if (atual) { var i = indice(atual.n); if (i < HINOS.length - 1) abrir(HINOS[i + 1].n); } };
  function partilharTexto(t, titulo) {
    try {
      if (window.AndroidApp && window.AndroidApp.partilhar) { window.AndroidApp.partilhar(t); return true; }
      if (navigator.share) { navigator.share({ title: titulo || 'Hinário Tchokwe', text: t }); return true; }
      if (navigator.clipboard) { navigator.clipboard.writeText(t).then(function () { aviso('Texto copiado.'); }, function () {}); return true; }
    } catch (e) {}
    return false;
  }
  $('partilhar').onclick = function () { if (atual) partilharTexto(textoHino(atual), atual.ti); };

  (function () {
    var x0 = 0, y0 = 0, el = $('letra');
    el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 80 && Math.abs(dy) < 50) { (dx < 0 ? $('seg') : $('ant')).click(); }
    }, { passive: true });
  })();

  /* ---------- administrador: login ---------- */
  function hash(s) { // ofuscação simples (cyrb53); não é segurança forte
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57, str = 'iasd-mla|' + s;
    for (var i = 0; i < str.length; i++) {
      var ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  var origemLogin = 'capa', falhas = 0, bloqueioAte = 0;
  function abrirLogin(origem) {
    origemLogin = origem;
    if (admin) { mostrar('lista'); return; }
    var criar = !ler('admin_hash', null);
    $('login-msg').textContent = criar
      ? 'Crie uma palavra-passe de administrador (mínimo 4 caracteres). Só quem a tiver poderá adicionar, editar ou apagar hinos.'
      : 'Introduza a palavra-passe de administrador.';
    $('login-conf-caixa').hidden = !criar;
    $('login-ok').textContent = criar ? 'Criar e entrar' : 'Entrar';
    $('login-senha').value = ''; $('login-senha2').value = ''; $('login-erro').textContent = '';
    mostrar('login');
    setTimeout(function () { $('login-senha').focus(); }, 50);
  }
  function entrarAdmin() {
    var s = $('login-senha').value, guardada = ler('admin_hash', null);
    $('login-erro').textContent = '';
    if (!guardada) {
      if (s.length < 4) { $('login-erro').textContent = 'A palavra-passe deve ter pelo menos 4 caracteres.'; return; }
      if (s !== $('login-senha2').value) { $('login-erro').textContent = 'As duas palavras-passe não coincidem.'; return; }
      if (!gravar('admin_hash', hash(s))) { $('login-erro').textContent = 'Não foi possível guardar a palavra-passe.'; return; }
    } else {
      var agora = Date.now();
      if (agora < bloqueioAte) { $('login-erro').textContent = 'Demasiadas tentativas. Aguarde ' + Math.ceil((bloqueioAte - agora) / 1000) + ' s.'; return; }
      if (hash(s) !== guardada) {
        falhas++;
        if (falhas >= 5) { bloqueioAte = agora + 30000; falhas = 0; $('login-erro').textContent = 'Demasiadas tentativas. Aguarde 30 s.'; }
        else $('login-erro').textContent = 'Palavra-passe incorreta.';
        return;
      }
    }
    falhas = 0; admin = true;
    $('login-senha').value = ''; $('login-senha2').value = '';
    mostrar('lista'); desenharLista(); aviso('Modo administrador ativo');
  }
  $('login-ok').onclick = entrarAdmin;
  $('login-senha').addEventListener('keydown', function (e) { if (e.key === 'Enter') { if ($('login-conf-caixa').hidden) entrarAdmin(); else $('login-senha2').focus(); } });
  $('login-senha2').addEventListener('keydown', function (e) { if (e.key === 'Enter') entrarAdmin(); });
  $('login-voltar').onclick = function () { mostrar(origemLogin); };
  $('sair-admin').onclick = function () { admin = false; atualizarAdminUI(); aviso('Sessão de administrador terminada'); };

  /* ---------- administrador: editor ---------- */
  var editando = null; // hino em edição, ou null para novo
  function serializar(h) {
    return h.b.map(function (b) { return (b.t === 'c' ? 'Utawizo\n' : '') + b.l.join('\n'); }).join('\n\n');
  }
  function interpretar(txt) {
    var blocos = [], n = 0;
    txt.replace(/\r/g, '').split(/\n\s*\n/).forEach(function (bloco) {
      var l = bloco.split('\n').map(function (x) { return x.replace(/\s+/g, ' ').trim(); }).filter(Boolean);
      if (!l.length) return;
      if (/^utawizo\s*:?$/i.test(l[0])) { l.shift(); if (l.length) blocos.push({ t: 'c', l: l }); return; }
      if (/^\d{1,2}\s*[\.\)]?$/.test(l[0])) l.shift();
      else l[0] = l[0].replace(/^\d{1,2}\s*[\.\)]\s+/, '');
      if (!l.length) return;
      n++; blocos.push({ t: 'v', n: n, l: l });
    });
    return blocos;
  }
  function abrirEditor(h) {
    editando = h || null;
    $('ed-titulo-tela').textContent = h ? 'Editar hino ' + h.n : 'Novo hino';
    var proximo = HINOS.length ? HINOS[HINOS.length - 1].n + 1 : 1;
    $('ed-num').value = h ? h.n : proximo;
    $('ed-tit').value = h ? h.ti : '';
    $('ed-txt').value = h ? serializar(h) : '';
    $('ed-erro').textContent = '';
    mostrar('editor');
  }
  $('novo-hino').onclick = function () { abrirEditor(null); };
  $('editar').onclick = function () { if (atual) abrirEditor(atual); };
  $('ed-voltar').onclick = function () { if (editando) abrir(editando.n); else mostrar('lista'); };
  $('ed-gravar').onclick = function () {
    var n = parseInt($('ed-num').value, 10), ti = $('ed-tit').value.trim(), b = interpretar($('ed-txt').value);
    var er = $('ed-erro'); er.textContent = '';
    if (!(n >= 1)) { er.textContent = 'Indique um número válido (1 ou mais).'; return; }
    if (!ti) { er.textContent = 'Indique o título do hino.'; return; }
    if (!b.length) { er.textContent = 'Escreva a letra do hino.'; return; }
    var existente = porNumero(n);
    if (existente && existente !== editando) { er.textContent = 'Já existe o hino ' + n + ' (“' + existente.ti + '”). Escolha outro número.'; return; }
    var novo = preparar({ n: n, ti: ti, b: b });
    if (editando) {
      var i = HINOS.indexOf(editando);
      if (editando.n !== n) { var f = favoritos.indexOf(editando.n); if (f >= 0) { favoritos[f] = n; favoritos.sort(function (a, c) { return a - c; }); gravar('favoritos', favoritos); } }
      HINOS[i] = novo;
    } else HINOS.push(novo);
    HINOS.sort(function (a, c) { return a.n - c.n; });
    if (!guardarTodos()) { er.textContent = 'Não foi possível guardar (memória cheia?).'; return; }
    aviso('Hino ' + n + ' guardado');
    atual = null; abrir(n);
  };
  $('apagar').onclick = function () {
    if (!atual) return;
    var h = atual;
    confirmar('Apagar o hino ' + h.n + ' “' + h.ti + '”? Pode repor os hinos originais mais tarde em “Cópia”.', 'Apagar', true).then(function (ok) {
      if (!ok) return;
      HINOS.splice(indice(h.n), 1);
      var f = favoritos.indexOf(h.n); if (f >= 0) { favoritos.splice(f, 1); gravar('favoritos', favoritos); }
      guardarTodos(); aviso('Hino ' + h.n + ' apagado'); fechar();
    });
  };

  /* ---------- administrador: cópia de segurança ---------- */
  $('abrir-gestao').onclick = function () { $('g-msg').textContent = ''; $('g-txt').value = ''; $('g-nova').value = ''; mostrar('gestao'); };
  $('g-voltar').onclick = function () { mostrar('lista'); desenharLista(); };
  $('g-exportar').onclick = function () {
    var json = JSON.stringify(HINOS.map(limpo));
    $('g-txt').value = json;
    $('g-msg').textContent = 'Cópia pronta (' + HINOS.length + ' hinos). Se não abriu a partilha, copie o texto acima.';
    partilharTexto(json, 'Cópia do Hinário Tchokwe');
  };
  $('g-importar').onclick = function () {
    var m = $('g-msg'); m.textContent = '';
    var dados;
    try { dados = JSON.parse($('g-txt').value.trim()); } catch (e) { m.textContent = 'O texto não é uma cópia válida.'; return; }
    var ok = Array.isArray(dados) && dados.length && dados.every(function (h) {
      return h && Number.isInteger(h.n) && h.n >= 1 && typeof h.ti === 'string' && Array.isArray(h.b) && h.b.length &&
        h.b.every(function (b) { return (b.t === 'v' || b.t === 'c') && Array.isArray(b.l) && b.l.every(function (x) { return typeof x === 'string'; }); });
    });
    var nums = ok ? dados.map(function (h) { return h.n; }) : [];
    if (!ok || nums.some(function (n, i) { return nums.indexOf(n) !== i; })) { m.textContent = 'A cópia tem erros ou números repetidos.'; return; }
    confirmar('Substituir os hinos deste aparelho por esta cópia (' + dados.length + ' hinos)?', 'Restaurar', false).then(function (s) {
      if (!s) return;
      gravar('hinos_custom', dados); carregar(); m.textContent = dados.length + ' hinos restaurados.'; aviso('Cópia restaurada');
    });
  };
  $('g-repor').onclick = function () {
    confirmar('Repor os ' + ORIGINAIS.length + ' hinos originais? As alterações feitas neste aparelho serão perdidas.', 'Repor', true).then(function (s) {
      if (!s) return;
      apagarChave('hinos_custom'); carregar(); $('g-msg').textContent = 'Hinos originais repostos.'; aviso('Hinos originais repostos');
    });
  };
  $('g-mudar').onclick = function () {
    var s = $('g-nova').value;
    if (s.length < 4) { $('g-msg').textContent = 'A palavra-passe deve ter pelo menos 4 caracteres.'; return; }
    gravar('admin_hash', hash(s)); $('g-nova').value = ''; $('g-msg').textContent = 'Palavra-passe alterada.'; aviso('Palavra-passe alterada');
  };

  /* ---------- botão "voltar" do Android e teclado ---------- */
  window.appBack = function () {
    var j = janelaAberta(); if (j) { j._fechar(); return true; }
    switch (telaAtual) {
      case 'hino': fechar(); return true;
      case 'sobre': mostrar('capa'); return true;
      case 'login': mostrar(origemLogin); return true;
      case 'editor': if (editando) abrir(editando.n); else mostrar('lista'); return true;
      case 'gestao': mostrar('lista'); desenharLista(); return true;
      case 'lista':
        if ($('busca').value) { $('busca').value = ''; desenharLista(); return true; }
        if (aba !== 'todos') { trocarAba('todos'); return true; }
        mostrar('capa'); return true;
      default: return false; // capa: sair da app
    }
  };
  document.addEventListener('keydown', function (e) {
    if (telaAtual !== 'hino' || janelaAberta()) return;
    if (e.key === 'ArrowRight') $('seg').click(); else if (e.key === 'ArrowLeft') $('ant').click(); else if (e.key === 'Escape') fechar();
  });

  /* ---------- arranque ---------- */
  carregar(); aplicarTema(); aplicarTamanho(); desenharLista();
  var m = /^#h(\d+)$/.exec(location.hash);
  if (m && porNumero(+m[1])) { mostrar('lista'); abrir(+m[1]); } else mostrar('capa');
})();
