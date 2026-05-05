import { Utils } from "./utils.js";

// ================== GRÁFICOS ====================
// -- Gráfico de linhas --
export function criarGraficoMaisOuvidasMes(dados) { //Objeto para contar quantas ocorrências efetivas existem
  const categorias = dados.map(d => d.musica);
  const valores = dados.map(d => d.total);

  if (window.chartMes) { // Se já existir um gráfico
    window.chartMes.destroy(); // Destrói
  }

  window.chartMes = new ApexCharts(
    document.querySelector("#graficoMes"), {
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
export function criarGraficoFaltas(dados) { // Objeto para contar quantas ocorrências existem de cada str_ns
  const categorias = dados.map(d => d.numeroSerie);
  const faltas = dados.map(d => d.faltas);
  const efetivas = dados.map(d => d.efetivas);
  const preventivas = dados.map(d => d.preventivas);

  if (window.chartFaltasNS) { // Se já existir um gráfico
    window.chartFaltasNS.destroy(); // Destrói
  }

  window.chartFaltasNS = new ApexCharts( // Cria o gráfico de faltas por NS utilizando ApexCharts
    document.querySelector("#graficoFaltasNS"), {
      series: [{
        name: "Faltas",
        data: faltas
      },
      {
        name: "Efetivas",
        data: efetivas
      },
      {
        name: "Preventivas",
        data: preventivas
      }],
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
      xaxis: { categories: categorias },
      tooltip: {
        enabled: true,
        theme: "dark",
        followCursor: true,
        x: {
          show: true,
          formatter: function (val) {
            return `NS: ${val}`;
          }
        },
        y: { formatter: function (val, { seriesIndex, w}) {
            const nomeSerie = w.config.series[seriesIndex].name;
            return `${val} ${nomeSerie}`;
          }
        },
        title: { formatter: () => '' }
      },
      style: { fontSize: '14px' }
    }
  )
  window.chartFaltasNS.render();
}

// -- Gráfico de barras horizontais --
export function criarGraficoTopEfetivas(dados) {
  const categorias = dados.map(d => d.numeroSerie);
  const valores = dados.map(d => d.total);

  if (window.chartTopEfetivas) {
    window.chartTopEfetivas.destroy();
  }

  window.chartTopEfetivas = new ApexCharts(
    document.querySelector("#graficoTopEfetivas"),{
      series: [{ 
        name: "Efetivas",
        data: valores
      }],
      chart: { type: "bar", height: "280px", toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 4, borderRadiusApplication: "end", horizontal: true } },
      dataLabels: { enabled: false },
      xaxis: { categories: categorias },
      tooltip: { enabled: true, theme: "dark", followCursor: true }
    }
  );
  window.chartTopEfetivas.render();
}

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
