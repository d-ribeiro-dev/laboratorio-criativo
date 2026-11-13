# Grand Theft Family — pacote estático

Este pacote contém `index.html`, `styles.css`, `scripts.js` e as ilustrações da abertura/HQ na pasta `images/`. As páginas da HQ foram convertidas para WebP para reduzir o tamanho de carregamento; os arquivos originais não foram alterados.

## Os cinco retratos individuais

O site reconhece diretamente os nomes que já estão na sua pasta `images/`: `old-school.png` para Rodrigo, `the-spark.png` para Juh, `boss-lady.png` para Boss Lady, `the-gentleman.png` para Rick e `war-machine.png` para Rodriguinho. Não precisa mover nem renomear esses arquivos.

Como alternativa, o site também procura os nomes-base `rodrigo`, `juh`, `boss-lady`, `rick` e `rodriguinho` dentro de `images/personagens/`. São aceitos `.webp`, `.png`, `.jpg` ou `.jpeg`. Os arquivos com os nomes já existentes na raiz de `images/` têm prioridade. Cada retrato acompanha o perfil selecionado e é exibido inteiro, sem corte das feições. O comando `pnpm build:static` copia os arquivos encontrados para o build de produção.

Se algum arquivo individual não estiver presente, o perfil mostra um marcador com o nome do personagem; o banner coletivo não é repetido como retrato. O Preview hospedado não acessa imagens que existem apenas na pasta do seu computador. No projeto local, os cinco nomes acima serão carregados sem mover ou renomear; para mostrá-los no Preview hospedado, copie esses arquivos para `site/images/` do projeto web.

## Executar localmente

Extraia o ZIP mantendo a estrutura das pastas. Abra a pasta em um editor e inicie um servidor local, por exemplo a extensão **Live Server** do VS Code. Acesse o `index.html` pelo endereço local gerado pelo servidor. Como o JavaScript usa módulos ES, não abra o arquivo diretamente com `file://`.

## Integrar ao seu site atual

Use este `index.html` como base do novo fluxo ou transfira sua marcação para a página que já existe. Mantenha `styles.css` e `scripts.js` junto ao HTML e preserve a pasta `images/` ao lado deles. Se a página estiver em outra pasta, ajuste os caminhos relativos `./styles.css`, `./scripts.js` e `./images/...` de acordo. A interface apresenta os cinco personagens descritos no roteiro, a introdução do Episódio 01 e o leitor com capa + sete páginas.

## Layout em computador e celular

As telas de abertura e da equipe compactam os espaçamentos em computadores com pouca altura de janela (por exemplo, 1280×720 e 1366×768), para manter o conteúdo principal e os controles visíveis sem rolagem. Esse ajuste é exclusivo do PC: o celular mantém seu layout e rolagem vertical normais. O leitor da HQ não foi modificado por essa compactação.

## Lupa para ler os quadros

No leitor, use **AMPLIAR QUADRO** para abrir o quadro atual em tamanho ampliado. A capa é exibida inteira; a seta seguinte leva ao primeiro quadro da página 1. As setas laterais do painel ou as teclas ←/→ percorrem todos os quadros da HQ, passando automaticamente de uma página à outra sem fechar a lupa. No início e no fim da sequência, a seta correspondente fica desativada. Fechar o painel retorna ao leitor normal na página atualmente selecionada.
