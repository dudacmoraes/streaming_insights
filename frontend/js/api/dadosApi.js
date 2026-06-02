// ================== API ==================
export async function obterDadosDashboard() {
  const resposta = await fetch("http://127.0.0.1:8000/top-musicas");

  if (!resposta.ok) {
    throw new Error("Erro na API");
  }
  
  return resposta.json();
}
