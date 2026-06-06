// BACKGROUND
import { inicializarBackgroundAnimado } from "./ui/background.js";

//MENU E ANIMAÇÕES
import { inicializarMenu, animarContainers, inicializarBusca } from "./ui/script.js";

//API
import { obterDadosDashboard } from "./api/dadosApi.js";

// Importa os gráficos
import { criarGraficoMes } from "./components/charts.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    inicializarBackgroundAnimado();
    inicializarMenu();
    animarContainers();
    inicializarBusca();

    const dados = await obterDadosDashboard();
    console.log("Dados recebidos no main:", dados);

    criarGraficoMes(dados);
  } catch (erro) {
    console.error("Erro ao iniciar o dashboard:", erro);
  }
});
