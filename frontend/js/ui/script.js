// ================== MENU ==================
export function inicializarMenu() {
  const btn = document.getElementById("mobile-menu");
  const menu = document.getElementById("menu"); //Busca o botão no html
  if (!btn || !menu) return; //Verifica se os elementos existem, senão o código para para evitar erro

  function toggleMenu(forceOpen) { // Função responsável por abrir ou fechar o menu
    const willOpen = typeof forceOpen === "boolean" //Verifica se 'forceOpen' é do tipo boolean (true ou false)
      ? forceOpen // Se forceOpen for boolean > Usa o valor passado (true abre, false fecha)
      : !menu.classList.contains("open"); // Se forceOpen não foi passado: verifica se o menu não tem a classe open

    menu.classList.toggle("open", willOpen); // Adiciona ou remove a classe "open" no elemento do menu
    document.body.classList.toggle("menu-aberto", willOpen); // Adiciona ou remove a classe "menu-aberto" no <body>
    btn.setAttribute("aria-expanded", String(willOpen)); //Atualiza o atributo de acessibilidade aria-expanded no botão
    btn.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu"); //Atualiza o texto descritivo do botão
  }

  btn.addEventListener("click", () => toggleMenu()); // Quando o usuário clica no botão, a função é chamada sem parâmetros

  btn.addEventListener("keydown", (e) => { // Ouvinte de evento para teclas pressionadas
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMenu(); } // Verifica se a tecla pressionada foi Enter ou barra de espaço (teclas padrão para ativar botões)
    if (e.key === "Escape") toggleMenu(false); // Se a tecla pressionada for Escape, força o fechamento do menu
  });

  document.addEventListener("click", (e) => { // Detectar cliques fora do menu
    if (!btn.contains(e.target) && !menu.contains(e.target)) toggleMenu(false); // Verifica se o elemento não está dentro do botão do menu e não está no menu lateral e fecha o menu se o clique for fora
  });
}

// ================== ANIMAÇÃO DOS CONTAINERS ==================
export function animarContainers() {
  const graficoContainer = document.querySelectorAll(".grafico-container"); // Seleciona todos os elementos com a classe "gráfico-container"
  graficoContainer.forEach((graficoContainer, i) => { // Percorre cada container encontrado
    setTimeout(() => graficoContainer.classList.add("animate"), i * 180); // Aplica a animação em efeito cascata
  });
}

// ================== BARRA DE BUSCA ==================
export function inicializarBusca () {
  const formBusca = document.querySelector(".busca form"); // Seleciona o formulário da barra de busca
  const inputBusca = formBusca?.querySelector("input"); // Seleciona o campo de input dentro do formulário de busca
  const graficoContainer = document.querySelectorAll(".grafico-container"); // Seleciona todos os containers de gráficos da página
  
  if (!formBusca || !inputBusca) return; // Garante que o formulário e o input existam antes de rodar o código
  formBusca.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o recarregamento da página ao submeter o formulário
    const termoBusca = inputBusca.value.toLowerCase().trim(); // Obtém o valor digitado no input, converte para minúsculo e remove espaços extras

    graficoContainer.forEach(container => { // Percorre todos os containers de gráfico da página
      const textoContainer = container.innerText.toLowerCase(); // Obtém todo o texto visível dentro do container e converte para minúsculo
      if (textoContainer.includes(termoBusca)) { // Se o texto do container contém o termo digitado
        container.style.display = ""; //Mostra o container normalmente
      } else {
        container.style.display = "none"; // Oculta o container que não corresponde à busca
      }
    });
  });
}