# 📖 Hinário Digital da Igreja (Edição Aberta)

Projeto de código aberto completo para igrejas, ministérios de louvor e congregações. Inclui janelas dedicadas de pesquisa por **número** e **título**, comandos de teclado para **apagar** e **introduzir**, e suporte completo para **logotipo personalizado da igreja**.

---

## 🚀 Principais Funcionalidades

### 1. ⛪ Identidade e Logotipo da Igreja Personalizáveis
- Espaço dedicado no cabeçalho com o nome da sua congregação.
- Permite carregar a imagem do **Logotipo da Igreja** (upload local ou link web).
- O logotipo é exibido no cabeçalho, na leitura e no **Modo Projeção** (tela de culto).

### 2. 🪟 Janelas de Pesquisa Dedicadas
- **Janela de Pesquisa por Número** (Atalho: `N`):
  - Visor LCD digital de alto contraste com feedback em tempo real.
  - Teclado numérico virtual integrado.
- **Janela de Pesquisa por Título e Letra** (Atalho: `T`):
  - Pesquisa instantânea por títulos e trechos de estrofes ou refrão.
  - Pílulas de filtro por categorias temáticas (*Louvor, Oração, Salvação...*).

### 3. ⌨️ Comandos de Teclado (Apagar e Introduzir)
- **Introduzir**: Tecla `Enter` ou botão na tela para confirmar e abrir o hino na hora.
- **Apagar**: Tecla `Backspace` ou botão na tela para remover o último dígito digitado.
- **Limpar**: Tecla `Delete` ou botão na tela para limpar o visor por completo.
- **Digitação Direta**: Pressione os números `0` a `9` no teclado para preencher o visor automaticamente.
- **Tela Cheia**: Tecla `F` para ativar o Modo Projeção com fundo preto de alto contraste e logotipo no topo.

---

## 📂 Como Executar

O projeto pode ser aberto diretamente no seu navegador:

```bash
# Executar servidor local de desenvolvimento (porta 8085)
python -m http.server 8085
```
Ou acesse: **`http://localhost:8085`**
df
---

## 📁 Estrutura de Arquivos

```
hinario-digital/
├── index.html         # Estrutura com janelas de busca e área do logotipo
├── style.css          # Design responsivo, LCD, temas e modo projeção
├── app.js             # Lógica das janelas, comandos de teclado e logo storage
├── data/
│   └── hinos.json     # Acervo de hinos aberto em formato JSON
└── README.md          # Documentação do projeto
```POSSO AGORA FAZER O LOGN

