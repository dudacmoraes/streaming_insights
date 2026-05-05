//MENU E ANIMAÇÕES
import { inicializarMenu, animarContainers, inicializarBusca } from "./ui/script.js";

//API
import { obterDadosDashboard } from "./api/dadosApi.js";
// Importa os transformadores
import { transformarGraficoFaltas, transformarFaltasEfetivas, transformarTopEfetivas } from "./charts/transformadores.js";
// Importa os gráficos
import { criarGraficoFaltas, criarGraficoFaltasEfetivas, criarGraficoTopEfetivas } from "./charts/charts.js";
// Importa a tabela
import { criarTabela } from "./charts/grid.js";

document.addEventListener("DOMContentLoaded", async () => {
  inicializarMenu();
  animarContainers();
  inicializarBusca();

  const { tabela, grafico } = await obterDadosDashboard();

  criarTabela(tabela);
  criarGraficoFaltasEfetivas(transformarFaltasEfetivas(tabela));
  criarGraficoFaltas(transformarGraficoFaltas(grafico));
  criarGraficoTopEfetivas(transformarTopEfetivas(grafico, 10));
});