let slideAtual = 0;

function atualizarSlide() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${slideAtual * 100}vw)`;

  const root = document.documentElement;
  if (slideAtual === 0) {
    root.style.setProperty('--cor-seta', '#e34c26');
    root.style.setProperty('--cor-seta-baixo', '#f06529');
  } else if (slideAtual === 1) {
    root.style.setProperty('--cor-seta', '#2965f1');
    root.style.setProperty('--cor-seta-baixo', '#264de4');
  } else if (slideAtual === 2) {
    root.style.setProperty('--cor-seta', '#306998');
    root.style.setProperty('--cor-seta-baixo', '#4B8BBE');
  } else if (slideAtual === 3) {
    root.style.setProperty('--cor-seta', '#f89820');
    root.style.setProperty('--cor-seta-baixo', '#b07219');
  }
}

function avancar() {
  slideAtual = (slideAtual + 1) % 4;
  atualizarSlide();
}

function voltar() {
  slideAtual = (slideAtual - 1 + 4) % 4;
  atualizarSlide();
}