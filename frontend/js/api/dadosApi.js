// ================== API ==================
export async function obterDadosDashboard() {
  const topMusicas = await fetch("http://127.0.0.1:8000/top-musicas");

  if (!topMusicas.ok) {
    throw new Error("Erro na API");
  }
  
  return topMusicas.json();
}
