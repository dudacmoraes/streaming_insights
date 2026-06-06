import { headerMap } from "./utils.js";

// ================== TABELA (GRID.JS) ==================
export function criarTabela(dados) {
    if (!dados || dados.length === 0) {
        console.warn("Nenhum dado recebido para a tabela.");
        return;
    }

    const colunas = Object.keys(dados[0]);

    function normalizarChave(col) {
        return col.trim().toLowerCase().replace(/\s+/g, "");
    }

    new gridjs.Grid({
        columns: colunas.map((col) => ({
            id: col,
            name: headerMap[normalizarChave(col)] ?? col,
            width: "200px",
        })),
        data: dados.map((row) => colunas.map((col) => row[col])),
        search: true,
        sort: true,
        pagination: { limit: 5 },
    }).render(document.getElementById("tabela-grid"));
}
