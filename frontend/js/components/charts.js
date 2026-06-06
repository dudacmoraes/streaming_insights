import { Utils } from "./utils.js";

// ================== GRÁFICOS ====================
// -- Gráfico de linhas --
export function criarGraficoMes(dados) { //Objeto para contar quantas ocorrências efetivas existem

  if (!Array.isArray(dados)) {
    console.error("criarGraficoMes esperava um array, mas recebeu:", dados);
    return;
  }

  const categorias = dados.map(d => d.track_name);
  const valores = dados.map(d => d.play_count);

  if (window.chartMes) { // Se já existir um gráfico
    window.chartMes.destroy(); // Destrói
  }

  window.chartMes = new ApexCharts(
    document.querySelector("#maisOuvidasMes"), {
      series: [{ name: "Mais ouvidas do mês", data: valores }],
      chart: { height: "350", type: "line", zoom: { enabled: false }, toolbar: { show: false } },
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },
      xaxis: { categories: categorias },
      tooltip: { enabled: true, theme: "dark", followCursor: true }
  });

  console.log("Dados recebidos:", dados);

  window.chartMes.render();
}

// -- Gráfico de colunas empilhadas --
const chartAno = new ApexCharts( // Cria o gráfico de mais ouvidas por ano utilizando ApexCharts
  document.querySelector("#maisOuvidasAno"), {
    series: [10, 20, 30, 40, 50],
    chart: {
      type: "bar",
      height: 350, // Altura fixa para não bugar
      stacked: true,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: { horizontal: false, borderRadius: 3 } 
    },
    dataLabels: { 
      enabled: true,
      style: { colors: ['#000'] },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      followCursor: true,
      title: { formatter: () => '' }
    },
    style: { fontSize: '14px' }
  }
)
chartAno.render();

// -- Gráfico de barras horizontais --
const chartTop10semana = new ApexCharts(
  document.querySelector("#top10semana"), {
    series: [50, 60, 70, 80],
    chart: { type: "bar", height: "280px", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, borderRadiusApplication: "end", horizontal: true } },
    dataLabels: { enabled: false },
    tooltip: { enabled: true, theme: "dark", followCursor: true }
  }
);
chartTop10semana.render();

// -- Gráfico de setores (pizza) --
const chartSetor = new ApexCharts(document.querySelector("#graficoSetor"), {
    series: [44, 55, 13, 43, 22],
    chart: { type: "pie", width: "100%", height: "280" },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [{ breakpoint: 480, options: { legend: { position: "bottom" } } }],
});
chartSetor.render();

// -- Gráfico donut --
const chartPolar = new ApexCharts(document.querySelector("#graficoPolar"), {
    series: [44, 55, 41, 17, 15],
    chart: { type: "donut", width: "100%", height: "280" },
    responsive: [{ breakpoint: 480, options: { legend: { position: "bottom" } } }],
});
chartPolar.render();
