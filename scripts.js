const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#menu-principal');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
    menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }));
}

const stages = {
  investigar: {
    icon: '⌕', kicker: 'O PONTO DE PARTIDA', title: 'Uma página começou a virar uma história.',
    copy: 'A ideia inicial era apresentar cinco personagens da família em uma página inspirada em GTA. Durante a exploração, surgiu uma possibilidade maior: transformar a apresentação em uma mini HQ, com começo, conflito e continuidade.',
    source: 'Base documental: registro de origem e evolução do projeto.'
  },
  planejar: {
    icon: '◇', kicker: 'DAR FORMA À IDEIA', title: 'Definir o que não poderia se perder.',
    copy: 'A história ganhou uma premissa, personagens com funções próprias e uma direção visual. Um critério permaneceu central: variar roupas, expressões e cenários sem descaracterizar as pessoas representadas.',
    source: 'Base documental: decisões de produto, personagens e direção visual.'
  },
  construir: {
    icon: '✧', kicker: 'TIRAR DO PAPEL', title: 'Narrativa, imagens e experiência web.',
    copy: 'O projeto reuniu roteiro, cenas ilustradas e uma interface para apresentar a família e ler a HQ. A construção passou por ajustes de continuidade, composição, navegação e leitura dos quadros.',
    source: 'Base documental: evolução narrativa, refinamentos e implementação.'
  },
  validar: {
    icon: '✓', kicker: 'CONFERIR E REGISTRAR', title: 'Testar também é parte da criação.',
    copy: 'A validação observou navegação, ampliação dos quadros, teclado e comportamento em telas diferentes. A documentação também separou o que foi verificado, o que é interpretação e o que continua sem comprovação suficiente.',
    source: 'Base documental: registros de testes, conclusões e limitações.'
  }
};

const stageButtons = document.querySelectorAll('.stage-button');
if (stageButtons.length) {
  const icon = document.querySelector('#stage-icon');
  const kicker = document.querySelector('#stage-kicker');
  const title = document.querySelector('#stage-title');
  const copy = document.querySelector('#stage-copy');
  const source = document.querySelector('#stage-source');
  stageButtons.forEach((button) => button.addEventListener('click', () => {
    const stage = stages[button.dataset.stage];
    if (!stage) return;
    stageButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    icon.textContent = stage.icon;
    kicker.textContent = stage.kicker;
    title.textContent = stage.title;
    copy.textContent = stage.copy;
    source.textContent = stage.source;
  }));
}
