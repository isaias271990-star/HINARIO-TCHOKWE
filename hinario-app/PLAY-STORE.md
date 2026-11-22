# Publicar o Hinário Tchokwe na Google Play

## 1. Conta de programador (uma vez)
- Taxa única de **25 USD**, paga com cartão internacional (cartões pré-pagos não são aceites).
- **Conta de organização** (recomendada, em nome da Missão Leste de Angola): exige **número D-U-N-S** (gratuito em dnb.com), site e telefone da organização, e um responsável.
- **Conta pessoal:** exige verificação de identidade e, se for criada depois de 13/11/2023, um **teste fechado com pelo menos 12 testadores durante 14 dias seguidos** antes de poder publicar.
- Confirme sempre as regras atuais em support.google.com/googleplay/android-developer

## 2. Preparar o ficheiro a enviar
- A Google Play pede **AAB** (Android App Bundle), não APK.
- Apps novas têm de ter **targetSdk 36** (já configurado neste projeto) e, por isso, o Android Studio e o Gradle recentes (AGP 8.9.1+, JDK 17).
- Android Studio: `Build > Generate Signed App Bundle / APK > Android App Bundle`.
  Crie a chave (*keystore*) e **guarde o ficheiro .jks e as palavras-passe em 2 sítios seguros**. Não a coloque no GitHub.
- Antes de cada nova versão, aumente `versionCode` em `app/build.gradle`.

## 3. Criar a app na Play Console
1. `Criar app`: nome "Hinário Tchokwe", idioma, "Aplicação", "Gratuita".
2. Ficha da loja: use os ficheiros da pasta `play-store/` (ícone 512, imagem de destaque 1024×500, 5 capturas).
3. Preencher: classificação de conteúdo (questionário), público-alvo (todas as idades), **Segurança dos dados** (a app não recolhe nem partilha dados), categoria "Livros e referência" ou "Estilo de vida".
4. Política de privacidade: publique uma página simples (pode ser no site da Missão) a dizer que a app funciona offline e não recolhe dados pessoais.
5. Enviar o AAB para **Teste interno** primeiro, instalar num telemóvel e só depois **Produção**.
6. A revisão da Google pode demorar alguns dias.

## Textos sugeridos
**Descrição curta (até 80 caracteres):**
Hinário Tchokwe da Igreja Adventista do Sétimo Dia, offline.

**Descrição completa:**
O Hinário Tchokwe reúne os 300 hinos da Igreja Adventista do Sétimo Dia, Missão Leste de Angola, na língua tchokwe.

• Pesquise por número, título ou palavras da letra
• Guarde os seus hinos favoritos
• Ajuste o tamanho da letra e use o tema claro ou escuro
• Passe para o hino seguinte deslizando o dedo
• Partilhe a letra de um hino
• Funciona sem internet e não recolhe dados pessoais
