// ================== API ==================
export async function obterDadosDashboard() {
  const [grafico] = await Promise.all([
    fetch ("http://127.0.0.1:8000/dados/grafico").then(resposta => resposta.json())
  ]);
  return { grafico };
}