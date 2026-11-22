# Hinário Tchokwe — Aplicativo Android (IASD)

Aplicativo offline com os **300 hinos** do Hinário Tchokwe (fonte: `projecto_do_Hinário_Tchokwe_corrigido.docx`).

**Capa:** Igreja Adventista do Sétimo Dia · Missão Leste de Angola · Hinário Tchokwe. O logótipo oficial está em `app/src/main/assets/logo.png` (para trocar, substitua esse ficheiro e os ícones em `app/src/main/res/mipmap-*`).

**Administrador:** na capa, “Acesso de administrador”. Na primeira vez cria-se uma palavra-passe; depois, com ela, aparecem os botões **+ Novo hino**, **Editar**, **Apagar** e **Cópia** (partilhar/restaurar cópia dos hinos, repor os originais, mudar a palavra-passe). As alterações ficam só no telemóvel onde foram feitas; para as levar a outro aparelho use a cópia. A palavra-passe protege contra uso casual, não é segurança forte (limpar os dados da app apaga-a e as alterações).

**Funções:** pesquisa por número, título ou palavra da letra (ignora acentos) · favoritos · tamanho da letra · tema automático/claro/escuro · deslizar para o hino seguinte/anterior · partilhar letra · funciona sem internet e sem permissões.

## Estrutura
- `app/src/main/assets/` — a interface (HTML, CSS, JS) e os hinos (`hinos.js`). Abra `index.html` desta pasta num navegador para testar sem Android.
- `app/` — projeto Android (Java, sem dependências externas) que mostra essa pasta num WebView.
- `tools/` — scripts que converteram o documento Word em `hinos.json` e `hinos.js`.

## Como gerar o APK

### Opção A — Android Studio (no computador)
1. Instale o Android Studio e abra esta pasta (`File > Open`).
2. Aguarde o "Gradle Sync" terminar (precisa de internet só nesta primeira vez).
3. `Build > Build Bundle(s) / APK(s) > Build APK(s)`.
4. O APK fica em `app/build/outputs/apk/debug/app-debug.apk`. Envie-o para os telemóveis (WhatsApp, Bluetooth, cartão) e instale.

### Opção B — Na nuvem, sem instalar nada (GitHub)
1. Crie uma conta e um repositório no GitHub e envie todo o conteúdo desta pasta.
2. Separador **Actions > Gerar APK > Run workflow**.
3. No fim, descarregue o ficheiro `hinario-tchokwe-apk` (contém o APK).

Nos telemóveis, ao instalar, permita "instalar de fontes desconhecidas".

## Corrigir ou acrescentar hinos
1. Edite o ficheiro Word e corra:
   `python3 tools/parse_docx.py hinos.docx tools/hinos.json`
   `python3 tools/build_data.py tools/hinos.json app/src/main/assets/hinos.js`
2. Gere o APK outra vez e aumente `versionCode` em `app/build.gradle`.

## Para publicar na Google Play
É preciso um APK/AAB assinado com chave própria (guarde-a bem) e uma conta de programador Google Play.

## Nota
`HINARIO.db` não pôde ser aberto (arquivo cifrado ou danificado) e não foi usado. `Projecto.db` tem só os primeiros 40 hinos e coincide com o Word.

## Versão web (GitHub Pages)
`python3 tools/build_single.py app/src/main/assets site/index.html` cria **um único ficheiro** `site/index.html` com tudo dentro. Para publicar no GitHub Pages basta enviar esse ficheiro (substituindo o `index.html` do site). Assim nenhum ficheiro pode ficar desatualizado.
