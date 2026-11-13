const family = [
  {
    name: "Rodrigo",
    imageKey: "rodrigo",
    legacyImageKey: "old-school",
    alias: "THE OLD SCHOOL",
    tagline: "Experiência. Respeito. Tradição.",
    description: "O pai da família conhece as ruas de Los Santos como poucos. Seu passado com Dante Varela e o Project Eclipse pode colocar todos em perigo.",
    role: "Conhecimento sobre Dante e o passado.",
    reputation: 5,
    skills: { "Força": 7, "Agilidade": 6, "Inteligência": 9, "Precisão": 8, "Furtividade": 6, "Estratégia": 10 },
  },
  {
    name: "Juh",
    imageKey: "juh",
    legacyImageKey: "the-spark",
    alias: "THE SPARK",
    tagline: "A faísca que ninguém consegue apagar.",
    description: "Corajosa, espontânea e cheia de energia. Uma gravação acidental coloca Juh no centro de uma conspiração — mas ela não espera passivamente pelo resgate.",
    role: "Observação e busca por oportunidades.",
    reputation: 3,
    skills: { "Força": 5, "Agilidade": 10, "Inteligência": 8, "Precisão": 7, "Furtividade": 7, "Estratégia": 8 },
  },
  {
    name: "Boss Lady",
    imageKey: "boss-lady",
    legacyImageKey: "boss-lady",
    alias: "THE BOSS LADY",
    tagline: "A mente por trás da família.",
    description: "Inteligência, atitude e poder. Quando tudo começa a desmoronar, é ela quem assume o comando e mantém a equipe focada no que importa.",
    role: "Comando e estratégia.",
    reputation: 5,
    skills: { "Força": 6, "Agilidade": 7, "Inteligência": 10, "Precisão": 7, "Furtividade": 8, "Estratégia": 9 },
  },
  {
    name: "Rick",
    imageKey: "rick",
    legacyImageKey: "the-gentleman",
    alias: "THE GENTLEMAN",
    tagline: "Classe nunca sai de moda.",
    description: "Elegância, inteligência e personalidade. Rick conhece as pessoas certas e sabe como se aproximar sem chamar atenção.",
    role: "Infiltração, reconhecimento e contatos.",
    reputation: 4,
    skills: { "Força": 6, "Agilidade": 8, "Inteligência": 9, "Precisão": 8, "Furtividade": 10, "Estratégia": 9 },
  },
  {
    name: "Rodriguinho",
    imageKey: "rodriguinho",
    legacyImageKey: "war-machine",
    alias: "THE WAR MACHINE",
    tagline: "Feito para entrar em ação.",
    description: "Determinação, força e atitude. É quem prepara os equipamentos, organiza a proteção e garante a cobertura da família.",
    role: "Equipamentos, proteção e cobertura.",
    reputation: 4,
    skills: { "Força": 10, "Agilidade": 8, "Inteligência": 7, "Precisão": 9, "Furtividade": 5, "Estratégia": 8 },
  },
];

const comicPages = [
  {
    src: new URL("./images/grand-theft-family-capa.webp", import.meta.url).href,
    alt: "Capa de Grand Theft Family — Episódio 01: Operation: No One Left Behind",
    label: "CAPA",
  },
  {
    src: new URL("./images/hq-pagina-01.webp", import.meta.url).href,
    alt: "Página 1 — Bem-vindo a Los Santos",
    label: "PÁGINA 1 · BEM-VINDO A LOS SANTOS",
  },
  {
    src: new URL("./images/hq-pagina-02.webp", import.meta.url).href,
    alt: "Página 2 — A Dívida de 15 Anos",
    label: "PÁGINA 2 · A DÍVIDA DE 15 ANOS",
  },
  {
    src: new URL("./images/hq-pagina-03.webp", import.meta.url).href,
    alt: "Página 3 — O Arquivo Zero",
    label: "PÁGINA 3 · O ARQUIVO ZERO",
  },
  {
    src: new URL("./images/hq-pagina-04.webp", import.meta.url).href,
    alt: "Página 4 — O Terceiro Participante",
    label: "PÁGINA 4 · O TERCEIRO PARTICIPANTE",
  },
  {
    src: new URL("./images/hq-pagina-05.webp", import.meta.url).href,
    alt: "Página 5 — No One Left Behind",
    label: "PÁGINA 5 · NO ONE LEFT BEHIND",
  },
  {
    src: new URL("./images/hq-pagina-06.webp", import.meta.url).href,
    alt: "Página 6 — O Resgate",
    label: "PÁGINA 6 · O RESGATE",
  },
  {
    src: new URL("./images/hq-pagina-07.webp", import.meta.url).href,
    alt: "Página 7 — Fim do Episódio",
    label: "PÁGINA 7 · FIM DO EPISÓDIO",
  },
];

// Retângulos [esquerda, topo, direita, base] medidos nos originais 1632 × 2176.
// Cada retângulo corresponde a um número visível na página; a arte original não é modificada.
const comicPanelRegions = {
  1: [[0, 133, 1632, 733], [0, 742, 1632, 1311], [0, 1320, 877, 2153], [889, 1320, 1632, 2153]],
  2: [[0, 114, 850, 758], [859, 114, 1632, 758], [0, 768, 730, 1328], [742, 768, 1632, 1328], [0, 1336, 1632, 2166]],
  3: [[0, 94, 1632, 690], [0, 695, 1632, 1114], [0, 1120, 1632, 1526], [0, 1532, 829, 2176], [831, 1532, 1632, 2176]],
  4: [[0, 127, 974, 842], [984, 127, 1632, 842], [0, 852, 1632, 1390], [0, 1402, 965, 2158], [975, 1402, 1632, 2158]],
  5: [[0, 101, 977, 661], [987, 101, 1632, 661], [0, 671, 1632, 1160], [0, 1168, 1632, 1686], [0, 1692, 1632, 2164]],
  6: [[0, 97, 1632, 571], [0, 576, 1632, 932], [0, 939, 1632, 1298], [0, 1305, 1632, 1655], [0, 1660, 1632, 2148]],
  7: [[0, 90, 924, 1076], [939, 90, 1632, 1076], [0, 1089, 840, 2159], [852, 1089, 1632, 2159]],
};

const screens = ["welcome", "team", "episode", "reader"];
const stageNames = {
  welcome: "A HISTÓRIA DA FAMÍLIA",
  team: "SELEÇÃO DA EQUIPE",
  episode: "EPISÓDIO 01",
  reader: "LEITURA DA HQ",
};
const screenElements = Object.fromEntries(
  screens.map((name) => [name, document.getElementById(`screen-${name}`)]),
);
const siteShell = document.querySelector(".site-shell");
const stageLabel = document.getElementById("stage-label");
const headerLink = document.querySelector(".header-link");
const headerLinkLabel = document.getElementById("header-link-label");
const tabsContainer = document.getElementById("team-tabs");
const zoomDialog = document.getElementById("panel-zoom");
const zoomOpenButton = document.getElementById("zoom-open");
const zoomImage = document.getElementById("zoom-image");
const zoomCrop = document.getElementById("zoom-crop");
const compactPcMedia = window.matchMedia("(min-width: 931px) and (max-height: 840px)");
const portraitExtensions = ["webp", "png", "jpg", "jpeg"];
let portraitRequest = 0;
let activeScreen = "welcome";
let activeProfile = 0;
let activePage = 0;
let activeZoomPanel = 0;
let zoomNavigationToken = 0;

function syncDesktopCompactMode() {
  const shouldCompact = compactPcMedia.matches && ["welcome", "team"].includes(activeScreen);
  siteShell.classList.toggle("compact-pc", shouldCompact);
}

function showScreen(name, { focus = false } = {}) {
  if (!screenElements[name]) return;
  activeScreen = name;
  syncDesktopCompactMode();
  for (const screenName of screens) {
    const screen = screenElements[screenName];
    const isVisible = screenName === name;
    screen.hidden = !isVisible;
    screen.setAttribute("aria-hidden", String(!isVisible));
  }
  stageLabel.textContent = stageNames[name];
  const headerActions = {
    welcome: { target: "team", label: "CONHECER A EQUIPE" },
    team: { target: "welcome", label: "VOLTAR AO INÍCIO" },
    episode: { target: "team", label: "VOLTAR À EQUIPE" },
    reader: { target: "episode", label: "VOLTAR AO EPISÓDIO" },
  };
  headerLink.dataset.go = headerActions[name].target;
  headerLinkLabel.textContent = headerActions[name].label;
  siteShell.classList.toggle("reader-mode", name === "reader");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (focus) {
    const heading = screenElements[name].querySelector("h1, h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }
}
syncDesktopCompactMode();
window.addEventListener("resize", syncDesktopCompactMode, { passive: true });

function updateProfilePortrait(profile) {
  const image = document.getElementById("team-character-image");
  const label = document.getElementById("team-image-label");
  const placeholder = document.getElementById("portrait-placeholder");
  const placeholderInitial = document.getElementById("portrait-initial");
  const placeholderLabel = document.getElementById("portrait-placeholder-label");
  const request = ++portraitRequest;
  image.hidden = true;
  placeholder.hidden = false;
  placeholder.setAttribute("aria-label", `Retrato individual de ${profile.name} não disponível neste pacote.`);
  placeholderInitial.textContent = profile.name.trim().charAt(0).toLocaleUpperCase("pt-BR");
  placeholderLabel.textContent = `FOTO DE ${profile.name.toLocaleUpperCase("pt-BR")}`;
  label.textContent = profile.name.toLocaleUpperCase("pt-BR");

  const imageBases = [
    `./images/${profile.legacyImageKey}`,
    `./images/personagens/${profile.imageKey}`,
  ];

  function trySource(baseIndex, extensionIndex) {
    if (baseIndex >= imageBases.length) return;
    const source = `${imageBases[baseIndex]}.${portraitExtensions[extensionIndex]}`;
    const candidate = new Image();
    candidate.onload = () => {
      if (request !== portraitRequest) return;
      image.src = source;
      image.alt = `Retrato individual de ${profile.name}`;
      image.hidden = false;
      placeholder.hidden = true;
    };
    candidate.onerror = () => {
      if (extensionIndex + 1 < portraitExtensions.length) {
        trySource(baseIndex, extensionIndex + 1);
      } else {
        trySource(baseIndex + 1, 0);
      }
    };
    candidate.src = source;
  }

  trySource(0, 0);
}

function renderProfile() {
  const profile = family[activeProfile];
  updateProfilePortrait(profile);
  renderSkills(profile);
  document.getElementById("profile-index").textContent = `${String(activeProfile + 1).padStart(2, "0")} / ${String(family.length).padStart(2, "0")}`;
  document.getElementById("profile-alias").textContent = profile.alias;
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-tagline").textContent = profile.tagline;
  document.getElementById("profile-description").textContent = profile.description;
  document.getElementById("profile-role").textContent = profile.role;
  document.getElementById("profile-count").textContent = `PERFIL ${activeProfile + 1} DE ${family.length}`;
  document.getElementById("previous-profile").disabled = activeProfile === 0;
  document.getElementById("next-profile").disabled = activeProfile === family.length - 1;

  [...tabsContainer.children].forEach((button, index) => {
    button.setAttribute("aria-pressed", String(index === activeProfile));
  });
}

function renderSkills(profile) {
  const list = document.getElementById("skill-list");
  list.replaceChildren();

  for (const [label, value] of Object.entries(profile.skills)) {
    const row = document.createElement("div");
    row.className = "skill-row";
    const heading = document.createElement("div");
    heading.className = "skill-row-heading";
    const name = document.createElement("span");
    name.textContent = label;
    const score = document.createElement("strong");
    score.textContent = String(value);
    heading.append(name, score);

    const track = document.createElement("div");
    track.className = "skill-track";
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${label} de ${profile.name}`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", "10");
    track.setAttribute("aria-valuenow", String(value));
    const fill = document.createElement("span");
    fill.className = "skill-fill";
    fill.style.width = `${value * 10}%`;
    track.append(fill);
    row.append(heading, track);
    list.append(row);
  }

  const stars = document.getElementById("reputation-stars");
  stars.replaceChildren();
  stars.setAttribute("aria-label", `Reputação de ${profile.name}: ${profile.reputation} de 5 estrelas`);
  for (let index = 1; index <= 5; index += 1) {
    const star = document.createElement("span");
    star.className = index <= profile.reputation ? "is-lit" : "";
    star.setAttribute("aria-hidden", "true");
    star.textContent = "★";
    stars.append(star);
  }
}

family.forEach((profile, index) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "team-tab";
  tab.textContent = String(index + 1).padStart(2, "0");
  tab.setAttribute("aria-label", `Ver perfil de ${profile.name}`);
  tab.setAttribute("aria-pressed", String(index === activeProfile));
  tab.addEventListener("click", () => {
    activeProfile = index;
    renderProfile();
  });
  tabsContainer.append(tab);
});
renderProfile();

function renderPage() {
  const page = comicPages[activePage];
  const image = document.getElementById("comic-image");
  image.src = page.src;
  image.alt = page.alt;
  image.decoding = "async";
  document.getElementById("page-label").textContent = page.label;
  document.getElementById("page-count").textContent = activePage === 0
    ? `CAPA · ${comicPages.length} IMAGENS`
    : `PÁGINA ${activePage} DE ${comicPages.length - 1}`;
  document.getElementById("reading-progress").value = activePage + 1;
  document.getElementById("previous-page-edge").disabled = activePage === 0;
  document.getElementById("next-page-edge").disabled = activePage === comicPages.length - 1;
  document.getElementById("reader-end-actions").hidden = activePage !== comicPages.length - 1;
  const zoomLabel = activePage === 0 ? "Ampliar a capa" : `Ampliar os quadros de ${page.label}`;
  zoomOpenButton.setAttribute("aria-label", zoomLabel);
  zoomOpenButton.title = zoomLabel;
}

function renderZoomPanel() {
  const page = comicPages[activePage];
  const sourceImage = document.getElementById("comic-image");
  if (!sourceImage.naturalWidth || !sourceImage.naturalHeight) return;

  const isCover = activePage === 0;
  const regions = isCover
    ? [[0, 0, sourceImage.naturalWidth, sourceImage.naturalHeight]]
    : comicPanelRegions[activePage];
  const [x1, y1, x2, y2] = regions[activeZoomPanel];
  const scaleX = sourceImage.naturalWidth / 1632;
  const scaleY = sourceImage.naturalHeight / 2176;
  const left = x1 * scaleX;
  const top = y1 * scaleY;
  const panelWidth = (x2 - x1) * scaleX;
  const panelHeight = (y2 - y1) * scaleY;
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const horizontalReserve = window.innerWidth <= 700 ? 128 : 200;
  const availableWidth = Math.max(140, Math.min(1400, window.innerWidth - horizontalReserve));
  const availableHeight = Math.max(180, viewportHeight - 190);
  const scale = Math.min(availableWidth / panelWidth, availableHeight / panelHeight);
  const displayWidth = Math.round(panelWidth * scale);
  const displayHeight = Math.round(panelHeight * scale);

  zoomCrop.style.width = `${displayWidth}px`;
  zoomCrop.style.height = `${displayHeight}px`;
  zoomImage.src = page.src;
  zoomImage.alt = isCover ? page.alt : `${page.alt}, quadro ${activeZoomPanel + 1}`;
  zoomImage.style.width = `${Math.round(sourceImage.naturalWidth * scale)}px`;
  zoomImage.style.height = `${Math.round(sourceImage.naturalHeight * scale)}px`;
  zoomImage.style.left = `${-Math.round(left * scale)}px`;
  zoomImage.style.top = `${-Math.round(top * scale)}px`;

  document.getElementById("zoom-kicker").textContent = `AMPLIAÇÃO · ${page.label}`;
  document.getElementById("panel-zoom-title").textContent = isCover
    ? "CAPA"
    : `QUADRO ${activeZoomPanel + 1}`;
  document.getElementById("zoom-count").textContent = isCover
    ? "CAPA · IMAGEM ÚNICA"
    : `${activeZoomPanel + 1} DE ${regions.length} QUADROS`;
  document.getElementById("zoom-hint").textContent = isCover
    ? "A capa é exibida inteira."
    : "Use as setas laterais ou ← → para mudar de quadro.";
  document.getElementById("zoom-previous").disabled = activePage === 0 && activeZoomPanel === 0;
  document.getElementById("zoom-next").disabled = activePage === comicPages.length - 1
    && activeZoomPanel === regions.length - 1;
}

async function openZoom() {
  const sourceImage = document.getElementById("comic-image");
  if (!sourceImage.complete) {
    try {
      await sourceImage.decode();
    } catch {
      return;
    }
  }
  if (!sourceImage.naturalWidth) return;
  activeZoomPanel = 0;
  renderZoomPanel();
  zoomDialog.showModal();
  document.getElementById("zoom-close").focus();
}

async function turnZoomPanel(amount) {
  let nextPage = activePage;
  let nextPanel = activeZoomPanel + amount;
  const panelCount = (pageIndex) => pageIndex === 0 ? 1 : comicPanelRegions[pageIndex].length;

  if (nextPanel < 0) {
    if (nextPage === 0) return;
    nextPage -= 1;
    nextPanel = panelCount(nextPage) - 1;
  } else if (nextPanel >= panelCount(nextPage)) {
    if (nextPage >= comicPages.length - 1) return;
    nextPage += 1;
    nextPanel = 0;
  }

  if (nextPage === activePage && nextPanel === activeZoomPanel) return;
  activePage = nextPage;
  activeZoomPanel = nextPanel;
  const navigationToken = ++zoomNavigationToken;
  renderPage();

  const sourceImage = document.getElementById("comic-image");
  const expectedSource = new URL(comicPages[activePage].src, document.baseURI).href;
  if (!sourceImage.complete || !sourceImage.naturalWidth || sourceImage.currentSrc !== expectedSource) {
    await new Promise((resolve) => {
      const finish = () => {
        sourceImage.removeEventListener("load", finish);
        sourceImage.removeEventListener("error", finish);
        resolve();
      };
      sourceImage.addEventListener("load", finish, { once: true });
      sourceImage.addEventListener("error", finish, { once: true });
      if (sourceImage.complete && sourceImage.currentSrc === expectedSource) finish();
    });
  }

  if (navigationToken === zoomNavigationToken && sourceImage.naturalWidth) renderZoomPanel();
}

function turnPage(amount) {
  const nextPage = Math.max(0, Math.min(comicPages.length - 1, activePage + amount));
  if (nextPage === activePage) return;
  activePage = nextPage;
  renderPage();
}

function startReading() {
  activePage = 0;
  renderPage();
  showScreen("reader", { focus: true });
}

document.getElementById("meet-family").addEventListener("click", () => showScreen("team", { focus: true }));
document.getElementById("open-episode").addEventListener("click", () => showScreen("episode", { focus: true }));
document.getElementById("start-comic").addEventListener("click", startReading);
zoomOpenButton.addEventListener("click", openZoom);
document.getElementById("zoom-close").addEventListener("click", () => zoomDialog.close());
document.getElementById("zoom-previous").addEventListener("click", () => turnZoomPanel(-1));
document.getElementById("zoom-next").addEventListener("click", () => turnZoomPanel(1));
zoomDialog.addEventListener("click", (event) => {
  if (event.target === zoomDialog) zoomDialog.close();
});
zoomDialog.addEventListener("close", () => zoomOpenButton.focus({ preventScroll: true }));
window.addEventListener("resize", () => {
  if (zoomDialog.open) renderZoomPanel();
}, { passive: true });
document.getElementById("back-to-episode").addEventListener("click", () => showScreen("episode", { focus: true }));
document.getElementById("return-team").addEventListener("click", () => showScreen("team", { focus: true }));
document.getElementById("previous-page-edge").addEventListener("click", () => turnPage(-1));
document.getElementById("next-page-edge").addEventListener("click", () => turnPage(1));
document.getElementById("previous-profile").addEventListener("click", () => {
  if (activeProfile > 0) { activeProfile -= 1; renderProfile(); }
});
document.getElementById("next-profile").addEventListener("click", () => {
  if (activeProfile < family.length - 1) { activeProfile += 1; renderProfile(); }
});
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.go, { focus: true }));
});

document.addEventListener("keydown", (event) => {
  if (zoomDialog.open) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      turnZoomPanel(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      turnZoomPanel(-1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      zoomDialog.close();
    }
    return;
  }
  if (activeScreen !== "reader" || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    turnPage(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    turnPage(-1);
  } else if (event.key === "Home") {
    event.preventDefault();
    activePage = 0;
    renderPage();
  } else if (event.key === "End") {
    event.preventDefault();
    activePage = comicPages.length - 1;
    renderPage();
  } else if (event.key === "Escape") {
    showScreen("episode", { focus: true });
  }
});

let touchStartX = null;
document.getElementById("comic-frame").addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });
document.getElementById("comic-frame").addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 55) turnPage(delta < 0 ? 1 : -1);
  touchStartX = null;
}, { passive: true });

renderPage();
