/**
 * Hinário Digital Aberto - Core Logic
 * Recursos: Janelas de Número e Título, Comandos de Teclado (Apagar e Introduzir), Logo da Igreja
 */

const DEFAULT_HYMNS = [
  {
    "numero": 1,
    "titulo": "Chuvas de Graça",
    "autor": "Daniel W. Whittle (1883)",
    "tom": "Bb",
    "categoria": "Avivamento",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Deus prometeu com certeza",
          "Chuvas de graça mandar;",
          "Ele nos dá fortaleza,",
          "E ricas bênçãos sem par."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Chuvas de graça,",
          "Chuvas pedimos, Senhor;",
          "Manda-nos já copiosas,",
          "Chuvas do Consolador!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Cristo nos tem concedido",
          "O Santo Consolador,",
          "De bênçãos nos tem suprido,",
          "Com seu imenso amor."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Dá-nos, Senhor, amplamente,",
          "Teu Santo Espírito aqui;",
          "Cumpra-se já a promessa,",
          "Que outrora nós vimos em ti."
        ]
      }
    ]
  },
  {
    "numero": 2,
    "titulo": "Castelo Forte",
    "autor": "Martinho Lutero (1529)",
    "tom": "C",
    "categoria": "Confiança & Fé",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Castelo forte é nosso Deus,",
          "Espada e bom escudo;",
          "Com seu poder defende os seus",
          "Em todo transe agudo.",
          "Com fúria e pertinaz,",
          "Persegue Satanás,",
          "Com ânimo cruel;",
          "Mui forte é o infiel,",
          "Igual não há na terra."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "A nossa força nada faz,",
          "Estamos nós perdidos;",
          "Mas nosso Deus socorro traz",
          "E somos protegidos.",
          "Sabeis quem é Jesus?",
          "O que venceu na cruz,",
          "Senhor dos altos céus,",
          "E sendo o próprio Deus,",
          "Triunfa na batalha."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Se nos quisessem devorar",
          "Demônios não contados,",
          "Não nos iriam derrotar,",
          "Nem ver-nos assustados.",
          "O príncipe do mal,",
          "Com seu plano infernal,",
          "Já condenado está;",
          "Vencido cairá",
          "Por uma só palavra."
        ]
      }
    ]
  },
  {
    "numero": 3,
    "titulo": "Grandioso És Tu",
    "autor": "Carl Boberg (1885)",
    "tom": "A",
    "categoria": "Louvor & Adoração",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Senhor meu Deus, quando eu maravilhado,",
          "Fico a pensar nas obras de tuas mãos;",
          "No céu azul de estrelas pontilhado,",
          "O teu poder mostrando a criação."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Então minh'alma canta a ti, Senhor:",
          "Grandioso és tu! Grandioso és tu!",
          "Então minh'alma canta a ti, Senhor:",
          "Grandioso és tu! Grandioso és tu!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Quando a vagar nas matas e florestas,",
          "Ouvir as aves belas a cantar;",
          "Olhar os montes sob altivas cristas,",
          "Ouvir o vento suave murmurar."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "E quando enfim, Jesus vier em glória,",
          "Ao lar celeste então me transportar;",
          "Adorarei com triunfante história,",
          "Prostrado aos pés do meu Senhor sem par."
        ]
      }
    ]
  },
  {
    "numero": 4,
    "titulo": "Alvo Mais Que a Neve",
    "autor": "Eden R. Latta (1881)",
    "tom": "G",
    "categoria": "Salvação & Redenção",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Bendito seja o Cordeiro,",
          "Que na cruz por nós padeceu!",
          "Bendito seja o seu sangue,",
          "Que por nós ali se verteu!",
          "Eis nesse sangue lavados,",
          "Com roupas que tão alvas são,",
          "Os pecadores remidos,",
          "Que perante Deus já estão."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Alvo mais que a neve!",
          "Alvo mais que a neve!",
          "Sim, nesse sangue lavado,",
          "Mais alvo que a neve serei."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Quão espinhosa coroa",
          "Jesus suportou por nós!",
          "Quão profundas as chagas,",
          "Que sofreu por todo algoz!",
          "Eis nessas chagas vertendo,",
          "O sangue que nos vai lavar;",
          "Qualquer rebelde culpado,",
          "Mais alvo que a neve deixar."
        ]
      }
    ]
  },
  {
    "numero": 5,
    "titulo": "Foi na Cruz",
    "autor": "Isaac Watts / Ralph E. Hudson",
    "tom": "Eb",
    "categoria": "Salvação & Redenção",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Oh! Quão cego andei e perdido vaguei,",
          "Longe, longe do meu Salvador!",
          "Mas da glória desceu e seu sangue verteu",
          "Pra salvar um tão pobre pecador."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Foi na cruz, foi na cruz,",
          "Onde um dia eu vi",
          "Meu pecado castigado em Jesus;",
          "Foi ali, pela fé, que os olhos abri,",
          "E agora me alegro em sua luz."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Eu ouvia falar dessa graça sem par,",
          "Que do céu trouxe nosso Jesus;",
          "Mas eu surdo me fiz, converter-me não quis",
          "Ao Senhor que por mim morreu na cruz."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Mas um dia senti meu pecado, e vi",
          "Sobre mim a condenação de Deus;",
          "Com remorso chorei, e a Jesus supliquei,",
          "E ele deu-me a esperança dos céus."
        ]
      }
    ]
  },
  {
    "numero": 6,
    "titulo": "Tu És Fiel, Senhor",
    "autor": "Thomas O. Chisholm (1923)",
    "tom": "D",
    "categoria": "Louvor & Adoração",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Tu és fiel, Senhor, ó Deus meu Pai,",
          "Nunca mudaste, tu nunca faltaste;",
          "Tuas mercês compassivas jamais",
          "Cessarão de descer sobre nós."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Tu és fiel, Senhor! Tu és fiel, Senhor!",
          "Dia após dia, com bênçãos sem fim;",
          "Tua provisão sempre me alcançará,",
          "Tua fidelidade é grande pra mim."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Flores e frutos e montes e mares,",
          "Sol, lua, estrelas brilhando no céu;",
          "Testemunham todos com vozes suaves",
          "A tua justiça, ternura e amor."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Pleno perdão tu me dás, paz bendita,",
          "Tua presença me acalma e conforta;",
          "Força e esperança terei todo o dia,",
          "Bênçãos eternas que o céu me reserva."
        ]
      }
    ]
  },
  {
    "numero": 7,
    "titulo": "Mais Perto Quero Estar",
    "autor": "Sarah F. Adams (1841)",
    "tom": "G",
    "categoria": "Consagração & Oração",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Mais perto quero estar, meu Deus, de ti,",
          "Inda que seja a dor que me una a ti;",
          "Sempre há de ser minha oração:",
          "Mais perto quero estar, meu Deus, de ti,",
          "Mais perto quero estar!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Andando triste aqui, na solidão,",
          "Pedra por travesseiro em aflição,",
          "Ainda em sonhos vou pedir:",
          "Mais perto quero estar, meu Deus, de ti,",
          "Mais perto quero estar!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Minh'alma cantará a ti louvor,",
          "E em Betel erguerei padrão de amor;",
          "Pois pelas dores que sofri,",
          "Mais perto hei de estar, meu Deus, de ti,",
          "Mais perto hei de estar!"
        ]
      }
    ]
  },
  {
    "numero": 8,
    "titulo": "Vencendo Vem Jesus",
    "autor": "Julia Ward Howe (1861)",
    "tom": "Bb",
    "categoria": "Segunda Vinda & Triunfo",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Já refulge a glória eterna de Jesus, o Rei dos reis;",
          "Breve os reinos deste mundo seguirão as suas leis!",
          "Os sinais dos tempos mostram que se cumprem suas messes:",
          "Vencendo vem Jesus!"
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Glória, glória! Aleluia!",
          "Glória, glória! Aleluia!",
          "Glória, glória! Aleluia!",
          "Vencendo vem Jesus!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "O clarim que chama os crentes à batalha já soou;",
          "Cristo, à frente do seu povo, multidões já conquistou;",
          "O inimigo, em retirada, seu furor já demonstrou:",
          "Vencendo vem Jesus!"
        ]
      }
    ]
  },
  {
    "numero": 9,
    "titulo": "Sossegai!",
    "autor": "Mary Ann Baker (1874)",
    "tom": "C",
    "categoria": "Paz & Conforto",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Mestre, o mar se revolta,",
          "As ondas nos dão pavor!",
          "O céu se reveste de trevas,",
          "Não temos um Salvador!",
          "Não se te dá que morramos?",
          "Podes assim dormir,",
          "Se a cada momento nós vemos",
          "As águas nos submergir?"
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "As ondas atendem ao meu mandar:",
          "Sossegai!",
          "Quer seja o mar ou o vento a bramir,",
          "Nenhuma tormenta nos pode afundar,",
          "Com o Mestre do universo a bordo a mandar.",
          "Sossegai! Sossegai!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Mestre, na minha tristeza,",
          "Estou quase a sucumbir;",
          "A dor que perturba minha alma",
          "Te implora: vem me acudir!",
          "De ondas de frio pecado,",
          "Quase a me afogar;",
          "Pereço, pereço, bom Mestre,",
          "Vem logo me resgatar!"
        ]
      }
    ]
  },
  {
    "numero": 10,
    "titulo": "Rude Cruz",
    "autor": "George Bennard (1913)",
    "tom": "Bb",
    "categoria": "Salvação & Redenção",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Rude cruz se erigiu,",
          "Dela o dia fugiu,",
          "Como emblema de vergonha e dor;",
          "Mas eu amo essa cruz,",
          "Onde um dia Jesus",
          "Deu a vida por mim, pecador."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Sim, eu amo a mensagem da cruz,",
          "Té morrer eu a vou proclamar;",
          "Levarei eu também minha cruz,",
          "Té por uma coroa trocar."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Desde a glória dos céus,",
          "O Cordeiro de Deus,",
          "Ao Calvário humilhante baixou;",
          "E essa cruz tem pra mim",
          "Atrativos sem fim,",
          "Porque nela Jesus me salvou."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Nessa cruz padeceu,",
          "Desprezado morreu,",
          "Meu Jesus para dar-me o perdão;",
          "E eu me alegro na cruz,",
          "Dela vem linda luz,",
          "Que ilumina o meu coração."
        ]
      }
    ]
  },
  {
    "numero": 11,
    "titulo": "Segurança Celestial (A Deus Demos Glória)",
    "autor": "Fanny J. Crosby (1875)",
    "tom": "Ab",
    "categoria": "Louvor & Adoração",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "A Deus demos glória com grande fervor,",
          "Seu Filho bendito por nós todos deu;",
          "A graça nos veio por Cristo Jesus,",
          "Caminho seguro nos abriu para o céu."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Exultai! Exultai! Vinde todos louvar",
          "A Jesus, Salvador, que nos pôde salvar!",
          "A Deus demos glória por tanto amor,",
          "Por tudo o que fez o bendito Senhor!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Oh! Graça sublime do bom Redentor!",
          "Ao crer no Cordeiro, perdão receber;",
          "O vil pecador que a Jesus recorrer,",
          "No mesmo momento perdão há de ter."
        ]
      }
    ]
  },
  {
    "numero": 12,
    "titulo": "Plena Paz",
    "autor": "Horatio G. Spafford (1873)",
    "tom": "Db",
    "categoria": "Paz & Conforto",
    "estrofes": [
      {
        "tipo": "estrofe",
        "numero": 1,
        "linhas": [
          "Se paz a mais doce me deres gozar,",
          "Se dor a mais forte sofrer,",
          "Seja o que for, tu me fazes saber",
          "Que feliz com Jesus sempre sou."
        ]
      },
      {
        "tipo": "coro",
        "linhas": [
          "Sou feliz com Jesus,",
          "Sou feliz com Jesus, meu Senhor!"
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 2,
        "linhas": [
          "Embora me assalte o cruel Satanás,",
          "E ataque com dura aflição;",
          "Oh! Certo eu estou, apesar de pesar,",
          "Que Jesus me dará salvação."
        ]
      },
      {
        "tipo": "estrofe",
        "numero": 3,
        "linhas": [
          "Meu triste pecado, por meu Redentor,",
          "Foi pago com sangue na cruz;",
          "A culpa cancela, liberto já sou,",
          "Louvado seja meu Jesus!"
        ]
      }
    ]
  }
];

class HinarioApp {
  constructor() {
    this.hymns = [];
    this.filteredHymns = [];
    this.currentHymn = null;
    this.activeWindow = 'number'; // 'number' ou 'title'
    this.activeCategory = 'all';
    this.onlyFavorites = false;
    this.fontSizePercent = 100;
    this.favorites = new Set(JSON.parse(localStorage.getItem('hinario_favorites') || '[]'));
    this.currentTheme = localStorage.getItem('hinario_theme') || 'dark';

    // Identidade da Igreja
    this.churchBranding = JSON.parse(localStorage.getItem('hinario_church_branding') || JSON.stringify({
      name: 'Hinário da Igreja',
      sub: 'Edição Aberta • Clique para personalizar',
      logo: ''
    }));

    this.initDOM();
    this.initTheme();
    this.loadChurchBranding();
    this.loadHymns();
    this.bindEvents();
    this.bindKeyboardShortcuts();
  }

  initDOM() {
    // Branding da Igreja
    this.btnChurchBranding = document.getElementById('btn-church-branding');
    this.headerChurchIcon = document.getElementById('header-church-icon');
    this.headerChurchImg = document.getElementById('header-church-img');
    this.churchDisplayName = document.getElementById('church-display-name');
    this.churchDisplaySub = document.getElementById('church-display-sub');
    this.readerChurchWatermark = document.getElementById('reader-church-watermark');
    this.readerChurchLogo = document.getElementById('reader-church-logo');
    this.readerChurchName = document.getElementById('reader-church-name');
    this.footerChurchTag = document.getElementById('footer-church-tag');

    // Modal de Configuração da Igreja
    this.btnOpenLogoModal = document.getElementById('btn-open-logo-modal');
    this.modalChurchConfig = document.getElementById('modal-church-config');
    this.formChurchConfig = document.getElementById('form-church-config');
    this.previewFallbackIcon = document.getElementById('preview-fallback-icon');
    this.previewImg = document.getElementById('preview-img');
    this.churchLogoFile = document.getElementById('church-logo-file');
    this.logoFileName = document.getElementById('logo-file-name');
    this.churchLogoUrl = document.getElementById('church-logo-url');
    this.churchNameInput = document.getElementById('church-name-input');
    this.churchSubInput = document.getElementById('church-sub-input');
    this.btnRemoveLogo = document.getElementById('btn-remove-logo');

    // Alternador de Janelas
    this.navWindowNumber = document.getElementById('nav-window-number');
    this.navWindowTitle = document.getElementById('nav-window-title');
    this.windowNumberPanel = document.getElementById('window-number-panel');
    this.windowTitlePanel = document.getElementById('window-title-panel');

    // Janela de Número (LCD e Teclas)
    this.lcdNumberInput = document.getElementById('lcd-number-input');
    this.lcdHymnPreview = document.getElementById('lcd-hymn-preview');
    this.btnPadClear = document.getElementById('btn-pad-clear');
    this.btnPadBackspace = document.getElementById('btn-pad-backspace');
    this.btnIntroduceEnter = document.getElementById('btn-introduce-enter');

    // Janela de Título (Busca e Categorias)
    this.searchInput = document.getElementById('hymn-search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.categoriesContainer = document.getElementById('categories-container');

    // Sidebar e Acervo
    this.hymnsListContainer = document.getElementById('hymns-list');
    this.resultsCountText = document.getElementById('results-count-text');
    this.btnRandomHymn = document.getElementById('btn-random-hymn');
    this.favCountBadge = document.getElementById('fav-count');

    // Área do Leitor do Hino
    this.emptyState = document.getElementById('empty-state');
    this.hymnDisplay = document.getElementById('hymn-display');
    this.displayNumber = document.getElementById('display-number');
    this.displayTitle = document.getElementById('display-title');
    this.displayAuthor = document.getElementById('display-author');
    this.displayKey = document.getElementById('display-key');
    this.displayCategory = document.getElementById('display-category');
    this.lyricsContainer = document.getElementById('lyrics-container');

    // Controles do Hino
    this.btnPrevHymn = document.getElementById('btn-prev-hymn');
    this.btnNextHymn = document.getElementById('btn-next-hymn');
    this.btnZoomIn = document.getElementById('btn-zoom-in');
    this.btnZoomOut = document.getElementById('btn-zoom-out');
    this.zoomIndicator = document.getElementById('zoom-indicator');
    this.btnToggleFavorite = document.getElementById('btn-toggle-favorite');
    this.btnProjectionMode = document.getElementById('btn-projection-mode');
    this.btnCopyLyrics = document.getElementById('btn-copy-lyrics');
    this.btnPrintHymn = document.getElementById('btn-print-hymn');
    this.btnFilterFavorites = document.getElementById('btn-filter-favorites');

    // Modal Novo Hino
    this.btnAddHymn = document.getElementById('btn-add-hymn');
    this.modalAddHymn = document.getElementById('modal-add-hymn');
    this.formNewHymn = document.getElementById('form-new-hymn');
    this.btnExportJson = document.getElementById('btn-export-json');

    // Tema & Toast
    this.btnThemeToggle = document.getElementById('btn-theme-toggle');
    this.themeMenu = document.getElementById('theme-menu');
    this.themeIcon = document.getElementById('theme-icon');
    this.toastEl = document.getElementById('toast-message');
  }

  /* ==========================================================================
     Gestão do Logo e Identidade da Igreja
     ========================================================================== */
  loadChurchBranding() {
    const { name, sub, logo } = this.churchBranding;

    this.churchDisplayName.textContent = name || 'Hinário da Igreja';
    this.churchDisplaySub.textContent = sub || 'Edição Aberta';
    this.readerChurchName.textContent = name || 'Hinário da Igreja';
    this.footerChurchTag.innerHTML = `<i class="fa-solid fa-church"></i> ${name || 'Hinário da Igreja'} • Edificação Comunitária`;

    if (logo) {
      this.headerChurchImg.src = logo;
      this.headerChurchImg.style.display = 'block';
      this.headerChurchIcon.style.display = 'none';

      this.readerChurchLogo.src = logo;
      this.readerChurchWatermark.style.display = 'flex';

      this.previewImg.src = logo;
      this.previewImg.style.display = 'block';
      this.previewFallbackIcon.style.display = 'none';
    } else {
      this.headerChurchImg.style.display = 'none';
      this.headerChurchIcon.style.display = 'block';

      this.readerChurchWatermark.style.display = 'none';

      this.previewImg.style.display = 'none';
      this.previewFallbackIcon.style.display = 'block';
    }

    this.churchNameInput.value = name || '';
    this.churchSubInput.value = sub || '';
    this.churchLogoUrl.value = (logo && !logo.startsWith('data:')) ? logo : '';
  }

  saveChurchBranding(name, sub, logo) {
    this.churchBranding = {
      name: name || 'Hinário da Igreja',
      sub: sub || 'Edição Aberta',
      logo: logo || ''
    };
    localStorage.setItem('hinario_church_branding', JSON.stringify(this.churchBranding));
    this.loadChurchBranding();
    this.showToast('Identidade e Logotipo da Igreja salvos com sucesso!');
  }

  openChurchConfigModal() {
    this.loadChurchBranding();
    this.modalChurchConfig.style.display = 'flex';
  }

  /* ==========================================================================
     Carregamento do Acervo de Hinos
     ========================================================================== */
  async loadHymns() {
    let loadedHymns = DEFAULT_HYMNS;

    try {
      const response = await fetch('data/hinos.json');
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json) && json.length > 0) {
          loadedHymns = json;
        }
      }
    } catch (e) {
      console.log('Acervo inicial ativo.');
    }

    const customHymns = JSON.parse(localStorage.getItem('hinario_custom_hymns') || '[]');
    const map = new Map();
    loadedHymns.forEach(h => map.set(Number(h.numero), h));
    customHymns.forEach(h => map.set(Number(h.numero), h));

    this.hymns = Array.from(map.values()).sort((a, b) => Number(a.numero) - Number(b.numero));
    this.filteredHymns = [...this.hymns];

    this.renderCategories();
    this.renderHymnList();
    this.updateFavCount();

    if (this.hymns.length > 0) {
      this.selectHymn(this.hymns[0].numero);
    }
  }

  /* ==========================================================================
     Alternância de Janelas (Número vs Título)
     ========================================================================== */
  switchSearchWindow(windowType) {
    this.activeWindow = windowType;
    if (windowType === 'number') {
      this.navWindowNumber.classList.add('active');
      this.navWindowTitle.classList.remove('active');
      this.windowNumberPanel.style.display = 'flex';
      this.windowTitlePanel.style.display = 'none';
      this.lcdNumberInput.focus();
    } else {
      this.navWindowTitle.classList.add('active');
      this.navWindowNumber.classList.remove('active');
      this.windowTitlePanel.style.display = 'flex';
      this.windowNumberPanel.style.display = 'none';
      this.searchInput.focus();
      this.searchInput.select();
    }
  }

  /* ==========================================================================
     Lógica da Janela de Número: Digitar, Apagar e Introduzir
     ========================================================================== */
  appendNumberDigit(digit) {
    if (this.lcdNumberInput.value.length >= 4) return;
    this.lcdNumberInput.value += digit;
    this.updateLcdPreview();
  }

  backspaceNumber() {
    this.lcdNumberInput.value = this.lcdNumberInput.value.slice(0, -1);
    this.updateLcdPreview();
  }

  clearNumber() {
    this.lcdNumberInput.value = '';
    this.updateLcdPreview();
  }

  updateLcdPreview() {
    const val = this.lcdNumberInput.value.trim();
    if (!val) {
      this.lcdHymnPreview.className = 'lcd-preview-title';
      this.lcdHymnPreview.innerHTML = '<i class="fa-solid fa-info-circle"></i> Digite o número ou use o teclado abaixo';
      return;
    }

    const num = Number(val);
    const match = this.hymns.find(h => h.numero === num);
    if (match) {
      this.lcdHymnPreview.className = 'lcd-preview-title has-match';
      this.lcdHymnPreview.innerHTML = `<i class="fa-solid fa-circle-check"></i> Hino Encontrado: <strong>Nº ${match.numero} - ${match.titulo}</strong>`;
    } else {
      this.lcdHymnPreview.className = 'lcd-preview-title';
      this.lcdHymnPreview.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Hino Nº ${num} não encontrado no acervo`;
    }
  }

  introduceHymn() {
    const val = this.lcdNumberInput.value.trim();
    if (!val) {
      this.showToast('Por favor digite ou selecione um número de hino.');
      return;
    }

    const num = Number(val);
    const match = this.hymns.find(h => h.numero === num);
    if (match) {
      this.selectHymn(num);
      this.showToast(`Introduzido: Nº ${match.numero} - ${match.titulo}`);
      // Rolar até o topo do hino
      document.getElementById('lyrics-section').scrollTop = 0;
    } else {
      this.showToast(`O Hino Nº ${num} não foi encontrado.`);
    }
  }

  /* ==========================================================================
     Lógica da Janela de Título & Filtros
     ========================================================================== */
  renderCategories() {
    const categories = new Set();
    this.hymns.forEach(h => {
      if (h.categoria) categories.add(h.categoria);
    });

    this.categoriesContainer.innerHTML = '<button class="cat-pill active" data-category="all">Todos</button>';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat-pill';
      btn.dataset.category = cat;
      btn.textContent = cat;
      this.categoriesContainer.appendChild(btn);
    });
  }

  filterHymns() {
    const query = this.searchInput.value.trim().toLowerCase();
    this.clearSearchBtn.style.display = query ? 'block' : 'none';

    this.filteredHymns = this.hymns.filter(hymn => {
      if (this.onlyFavorites && !this.favorites.has(hymn.numero)) {
        return false;
      }

      if (this.activeCategory !== 'all' && hymn.categoria !== this.activeCategory) {
        return false;
      }

      if (!query) return true;

      const numStr = String(hymn.numero);
      if (numStr === query || numStr.startsWith(query)) return true;
      if (hymn.titulo.toLowerCase().includes(query)) return true;
      if (hymn.autor && hymn.autor.toLowerCase().includes(query)) return true;

      if (hymn.estrofes && hymn.estrofes.some(est => 
        est.linhas.some(l => l.toLowerCase().includes(query))
      )) {
        return true;
      }

      return false;
    });

    this.renderHymnList();

    if (query && !isNaN(query)) {
      const exactMatch = this.hymns.find(h => h.numero === Number(query));
      if (exactMatch && (!this.currentHymn || this.currentHymn.numero !== exactMatch.numero)) {
        this.selectHymn(exactMatch.numero);
      }
    }
  }

  renderHymnList() {
    this.hymnsListContainer.innerHTML = '';
    const total = this.filteredHymns.length;
    this.resultsCountText.textContent = `${total} hino${total !== 1 ? 's' : ''} no acervo`;

    if (total === 0) {
      this.hymnsListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 0.88rem;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 1.8rem; margin-bottom: 0.75rem; opacity: 0.5; display:block;"></i>
          Nenhum hino encontrado com esses critérios.
        </div>
      `;
      return;
    }

    this.filteredHymns.forEach(hymn => {
      const card = document.createElement('div');
      card.className = `hymn-card ${this.currentHymn && this.currentHymn.numero === hymn.numero ? 'active' : ''}`;
      card.dataset.numero = hymn.numero;

      const isFav = this.favorites.has(hymn.numero);

      card.innerHTML = `
        <div class="card-num">${hymn.numero}</div>
        <div class="card-info">
          <div class="card-title">${hymn.titulo}</div>
          <div class="card-subtitle">
            <span>${hymn.categoria || 'Geral'}</span>
            ${hymn.tom ? `<span>• Tom: ${hymn.tom}</span>` : ''}
          </div>
        </div>
        <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-fav-num="${hymn.numero}" title="${isFav ? 'Remover dos favoritos' : 'Favoritar'}">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
        </button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav-btn')) {
          e.stopPropagation();
          this.toggleFavorite(hymn.numero);
          return;
        }
        this.selectHymn(hymn.numero);
      });

      this.hymnsListContainer.appendChild(card);
    });
  }

  selectHymn(numero) {
    const hymn = this.hymns.find(h => h.numero === Number(numero));
    if (!hymn) return;

    this.currentHymn = hymn;
    this.lcdNumberInput.value = hymn.numero;
    this.updateLcdPreview();

    document.querySelectorAll('.hymn-card').forEach(card => {
      card.classList.toggle('active', Number(card.dataset.numero) === hymn.numero);
    });

    this.emptyState.style.display = 'none';
    this.hymnDisplay.style.display = 'flex';

    this.displayNumber.textContent = `Nº ${hymn.numero}`;
    this.displayTitle.textContent = hymn.titulo;
    this.displayAuthor.innerHTML = `<i class="fa-solid fa-pen-nib"></i> ${hymn.autor || 'Autor Desconhecido'}`;
    this.displayKey.innerHTML = `<i class="fa-solid fa-music"></i> Tom: ${hymn.tom || '—'}`;
    this.displayCategory.textContent = hymn.categoria || 'Geral';

    const isFav = this.favorites.has(hymn.numero);
    this.btnToggleFavorite.className = `btn-action ${isFav ? 'is-fav' : ''}`;
    this.btnToggleFavorite.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>`;

    this.lyricsContainer.innerHTML = '';
    hymn.estrofes.forEach(bloco => {
      if (bloco.tipo === 'coro' || bloco.tipo === 'refrao') {
        const chorusEl = document.createElement('div');
        chorusEl.className = 'chorus-block';
        chorusEl.innerHTML = `
          <div class="chorus-tag"><i class="fa-solid fa-music"></i> Coro / Refrão</div>
          <div class="chorus-lines">
            ${bloco.linhas.map(l => `<span class="stanza-line">${l}</span>`).join('')}
          </div>
        `;
        this.lyricsContainer.appendChild(chorusEl);
      } else {
        const stanzaEl = document.createElement('div');
        stanzaEl.className = 'stanza-block';
        stanzaEl.innerHTML = `
          <div class="stanza-num">${bloco.numero || ''}</div>
          <div class="stanza-lines">
            ${bloco.linhas.map(l => `<span class="stanza-line">${l}</span>`).join('')}
          </div>
        `;
        this.lyricsContainer.appendChild(stanzaEl);
      }
    });

    const currentIndex = this.hymns.findIndex(h => h.numero === hymn.numero);
    this.btnPrevHymn.disabled = currentIndex <= 0;
    this.btnNextHymn.disabled = currentIndex >= this.hymns.length - 1;
  }

  navigateHymn(step) {
    if (!this.currentHymn) return;
    const currentIndex = this.hymns.findIndex(h => h.numero === this.currentHymn.numero);
    const nextIndex = currentIndex + step;
    if (nextIndex >= 0 && nextIndex < this.hymns.length) {
      this.selectHymn(this.hymns[nextIndex].numero);
    }
  }

  toggleFavorite(numero) {
    const num = Number(numero);
    if (this.favorites.has(num)) {
      this.favorites.delete(num);
      this.showToast(`Hino Nº ${num} removido dos favoritos.`);
    } else {
      this.favorites.add(num);
      this.showToast(`Hino Nº ${num} adicionado aos favoritos!`);
    }

    localStorage.setItem('hinario_favorites', JSON.stringify(Array.from(this.favorites)));
    this.updateFavCount();
    this.renderHymnList();

    if (this.currentHymn && this.currentHymn.numero === num) {
      const isFav = this.favorites.has(num);
      this.btnToggleFavorite.className = `btn-action ${isFav ? 'is-fav' : ''}`;
      this.btnToggleFavorite.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>`;
    }
  }

  updateFavCount() {
    this.favCountBadge.textContent = this.favorites.size;
  }

  adjustFontSize(delta) {
    this.fontSizePercent = Math.min(180, Math.max(70, this.fontSizePercent + delta));
    this.zoomIndicator.textContent = `${this.fontSizePercent}%`;
    this.lyricsContainer.style.fontSize = `${this.fontSizePercent / 100}rem`;
  }

  toggleProjectionMode() {
    const isProjection = document.body.classList.toggle('projection-mode');
    if (isProjection) {
      this.showToast('Modo Apresentação ativado com o Logotipo da Igreja. ESC para sair.');
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  copyLyrics() {
    if (!this.currentHymn) return;

    let text = `${this.churchBranding.name}\n`;
    text += `Hino Nº ${this.currentHymn.numero} - ${this.currentHymn.titulo}\n`;
    if (this.currentHymn.autor) text += `Autor: ${this.currentHymn.autor}\n\n`;

    this.currentHymn.estrofes.forEach(bloco => {
      if (bloco.tipo === 'coro' || bloco.tipo === 'refrao') {
        text += `[Refrão]\n${bloco.linhas.join('\n')}\n\n`;
      } else {
        text += `${bloco.numero ? bloco.numero + '. ' : ''}\n${bloco.linhas.join('\n')}\n\n`;
      }
    });

    navigator.clipboard.writeText(text.trim()).then(() => {
      this.showToast('Letra copiada com sucesso!');
    }).catch(() => {
      this.showToast('Não foi possível copiar a letra.');
    });
  }

  showToast(message) {
    if (!this.toastEl) return;
    this.toastEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;
    this.toastEl.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, 2800);
  }

  initTheme() {
    document.body.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('hinario_theme', theme);
    this.updateThemeIcon();

    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === theme);
    });

    this.themeMenu.classList.remove('show');
    this.showToast(`Tema alterado para: ${theme === 'dark' ? 'Noturno' : theme === 'sepia' ? 'Sépia' : 'Claro'}`);
  }

  updateThemeIcon() {
    if (!this.themeIcon) return;
    if (this.currentTheme === 'dark') {
      this.themeIcon.className = 'fa-solid fa-moon';
    } else if (this.currentTheme === 'sepia') {
      this.themeIcon.className = 'fa-solid fa-sun';
    } else {
      this.themeIcon.className = 'fa-regular fa-sun';
    }
  }

  closeModal(modal) {
    if (modal) modal.style.display = 'none';
  }

  /* ==========================================================================
     Event Listeners e Atalhos
     ========================================================================== */
  bindEvents() {
    // Alternância de Janelas
    this.navWindowNumber.addEventListener('click', () => this.switchSearchWindow('number'));
    this.navWindowTitle.addEventListener('click', () => this.switchSearchWindow('title'));

    // Teclado da Janela de Número
    document.querySelectorAll('.numeric-keypad-grid .pad-btn[data-val]').forEach(btn => {
      btn.addEventListener('click', () => this.appendNumberDigit(btn.dataset.val));
    });

    this.btnPadBackspace.addEventListener('click', () => this.backspaceNumber());
    this.btnPadClear.addEventListener('click', () => this.clearNumber());
    this.btnIntroduceEnter.addEventListener('click', () => this.introduceHymn());

    this.lcdNumberInput.addEventListener('input', () => this.updateLcdPreview());
    this.lcdNumberInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.introduceHymn();
      }
    });

    // Janela de Título
    this.searchInput.addEventListener('input', () => this.filterHymns());
    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.filterHymns();
      this.searchInput.focus();
    });

    this.categoriesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.activeCategory = btn.dataset.category;
      this.filterHymns();
    });

    // Favoritos
    this.btnFilterFavorites.addEventListener('click', () => {
      this.onlyFavorites = !this.onlyFavorites;
      this.btnFilterFavorites.classList.toggle('active', this.onlyFavorites);
      this.filterHymns();
      this.showToast(this.onlyFavorites ? 'Mostrando apenas hinos favoritos' : 'Mostrando todos os hinos');
    });

    // Aleatório
    this.btnRandomHymn.addEventListener('click', () => {
      if (this.hymns.length === 0) return;
      const random = this.hymns[Math.floor(Math.random() * this.hymns.length)];
      this.selectHymn(random.numero);
    });

    // Navegação e Leitor
    this.btnPrevHymn.addEventListener('click', () => this.navigateHymn(-1));
    this.btnNextHymn.addEventListener('click', () => this.navigateHymn(1));
    this.btnZoomIn.addEventListener('click', () => this.adjustFontSize(10));
    this.btnZoomOut.addEventListener('click', () => this.adjustFontSize(-10));
    this.btnToggleFavorite.addEventListener('click', () => {
      if (this.currentHymn) this.toggleFavorite(this.currentHymn.numero);
    });
    this.btnProjectionMode.addEventListener('click', () => this.toggleProjectionMode());
    this.btnCopyLyrics.addEventListener('click', () => this.copyLyrics());
    this.btnPrintHymn.addEventListener('click', () => window.print());

    // Configuração de Identidade da Igreja
    this.btnChurchBranding.addEventListener('click', () => this.openChurchConfigModal());
    this.btnOpenLogoModal.addEventListener('click', () => this.openChurchConfigModal());

    // Upload de arquivo de imagem do logo
    this.churchLogoFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      this.logoFileName.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target.result;
        this.previewImg.src = base64Data;
        this.previewImg.style.display = 'block';
        this.previewFallbackIcon.style.display = 'none';
        this.churchLogoUrl.value = ''; // Limpa url se arquivo foi carregado
      };
      reader.readAsDataURL(file);
    });

    // Mudança de URL do logo
    this.churchLogoUrl.addEventListener('input', () => {
      const url = this.churchLogoUrl.value.trim();
      if (url) {
        this.previewImg.src = url;
        this.previewImg.style.display = 'block';
        this.previewFallbackIcon.style.display = 'none';
        this.logoFileName.textContent = 'Imagem carregada via URL';
      }
    });

    // Remover Logo
    this.btnRemoveLogo.addEventListener('click', () => {
      this.previewImg.src = '';
      this.previewImg.style.display = 'none';
      this.previewFallbackIcon.style.display = 'block';
      this.churchLogoUrl.value = '';
      this.churchLogoFile.value = '';
      this.logoFileName.textContent = 'Nenhum ficheiro selecionado';
    });

    // Salvar Configuração da Igreja
    this.formChurchConfig.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.churchNameInput.value.trim();
      const sub = this.churchSubInput.value.trim();
      let logo = '';

      if (this.previewImg.style.display !== 'none' && this.previewImg.src) {
        logo = this.previewImg.src;
      }

      this.saveChurchBranding(name, sub, logo);
      this.closeModal(this.modalChurchConfig);
    });

    // Modal Novo Hino
    this.btnAddHymn.addEventListener('click', () => {
      this.modalAddHymn.style.display = 'flex';
      const nextNum = this.hymns.length > 0 ? Math.max(...this.hymns.map(h => h.numero)) + 1 : 1;
      document.getElementById('new-hymn-number').value = nextNum;
    });

    this.formNewHymn.addEventListener('submit', (e) => this.saveNewHymn(e));
    this.btnExportJson.addEventListener('click', () => this.exportJsonFile());

    // Fechar modais
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.close;
        this.closeModal(document.getElementById(targetId));
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal(overlay);
      });
    });

    // Temas
    this.btnThemeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.themeMenu.classList.toggle('show');
    });

    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => this.setTheme(btn.dataset.setTheme));
    });

    document.addEventListener('click', (e) => {
      if (!this.themeMenu.contains(e.target) && e.target !== this.btnThemeToggle) {
        this.themeMenu.classList.remove('show');
      }
    });
  }

  saveNewHymn(e) {
    e.preventDefault();

    const numero = Number(document.getElementById('new-hymn-number').value);
    const titulo = document.getElementById('new-hymn-title').value.trim();
    const autor = document.getElementById('new-hymn-author').value.trim() || 'Autor Desconhecido';
    const tom = document.getElementById('new-hymn-key').value.trim() || '';
    const categoria = document.getElementById('new-hymn-category').value.trim() || 'Geral';
    const rawLyrics = document.getElementById('new-hymn-lyrics').value.trim();

    if (!numero || !titulo || !rawLyrics) {
      alert('Por favor preencha o número, título e a letra do hino.');
      return;
    }

    const rawBlocks = rawLyrics.split(/\n\s*\n+/);
    let stanzaCounter = 1;
    const estrofes = rawBlocks.map(block => {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      const firstLine = lines[0].toLowerCase();

      const isChorus = firstLine.startsWith('coro') || firstLine.startsWith('refrão') || firstLine.startsWith('refrao');
      if (isChorus) {
        if (/^(coro|refrão|refrao)\s*:?$/i.test(lines[0])) {
          lines.shift();
        } else {
          lines[0] = lines[0].replace(/^(coro|refrão|refrao)\s*:?\s*/i, '');
        }
        return {
          tipo: 'coro',
          linhas: lines
        };
      } else {
        lines[0] = lines[0].replace(/^\d+[\.\)]\s*/, '');
        return {
          tipo: 'estrofe',
          numero: stanzaCounter++,
          linhas: lines
        };
      }
    });

    const newHymnObj = { numero, titulo, autor, tom, categoria, estrofes };

    const customHymns = JSON.parse(localStorage.getItem('hinario_custom_hymns') || '[]');
    const index = customHymns.findIndex(h => h.numero === numero);
    if (index >= 0) {
      customHymns[index] = newHymnObj;
    } else {
      customHymns.push(newHymnObj);
    }
    localStorage.setItem('hinario_custom_hymns', JSON.stringify(customHymns));

    this.loadHymns().then(() => {
      this.selectHymn(numero);
      this.closeModal(this.modalAddHymn);
      this.formNewHymn.reset();
      this.showToast(`Hino Nº ${numero} adicionado com sucesso!`);
    });
  }

  exportJsonFile() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.hymns, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "hinario-completo.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('Base exportada como hinario-completo.json');
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const activeEl = document.activeElement;
      const isInput = ['INPUT', 'TEXTAREA'].includes(activeEl.tagName);

      // ESC: sai da projeção ou fecha modais
      if (e.key === 'Escape') {
        if (document.body.classList.contains('projection-mode')) {
          this.toggleProjectionMode();
          return;
        }
        this.closeModal(this.modalChurchConfig);
        this.closeModal(this.modalAddHymn);
        this.themeMenu.classList.remove('show');
        return;
      }

      // Se o usuário estiver na Janela de Número e pressionar Backspace ou Enter
      if (activeEl === this.lcdNumberInput) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.introduceHymn();
        }
        return;
      }

      // Se estiver digitando em outros inputs (busca de título ou novo hino), ignora atalhos globais
      if (isInput) return;

      // Se pressionar dígitos numéricos 0-9 diretamente na página:
      if (/^[0-9]$/.test(e.key)) {
        this.switchSearchWindow('number');
        this.appendNumberDigit(e.key);
        return;
      }

      // Backspace global: apaga número na janela de número
      if (e.key === 'Backspace') {
        e.preventDefault();
        this.switchSearchWindow('number');
        this.backspaceNumber();
        return;
      }

      // Enter global: introduz o hino
      if (e.key === 'Enter') {
        e.preventDefault();
        this.introduceHymn();
        return;
      }

      // Delete global: limpa número
      if (e.key === 'Delete') {
        e.preventDefault();
        this.clearNumber();
        return;
      }

      // N: Alternar para Janela de Número
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        this.switchSearchWindow('number');
        return;
      }

      // T: Alternar para Janela de Título
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        this.switchSearchWindow('title');
        return;
      }

      // F: Modo Apresentação / Projeção
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this.toggleProjectionMode();
        return;
      }

      // Navegação por setas
      if (e.key === 'ArrowLeft') {
        this.navigateHymn(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigateHymn(1);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.hinarioApp = new HinarioApp();
});
