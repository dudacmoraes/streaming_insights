// ================== TRANSFORMADORES ====================
export function transformarFaltasEfetivas(efetivas) {
  const contagem = {};

  efetivas.forEach(linha => {
    //Colocar qual coluna do gráfico
    if (linha.efet_prev_man !== "E") return;

    // Usa o número de série para agrupar
    const numeroSerie = linha.str_ns;
    if(!numeroSerie) return;

    // Incrementa a contagem por número de série
    contagem[numeroSerie] = (contagem[numeroSerie] || 0) + 1;
  });

  // Converte para o formato usado pelos gráficos
  return Object.entries(contagem).map(
    ([numeroSerie, total]) => ({numeroSerie, total})
  );
}

export function transformarGraficoFaltas(contagemNS) {
  return Object.entries(contagemNS)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([numeroSerie, total]) => ({ numeroSerie, total }));
}

export function transformarTopEfetivas(contagemNS, limite = 10) {
  return Object.entries(contagemNS)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limite)
    .map(([numeroSerie, total]) => ({ numeroSerie, total }));
}