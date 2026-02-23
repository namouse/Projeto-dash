// 🔟 Clientes mais novos (GERAL)
function clientesMaisNovos() {
    return dadosOnboarding
        .filter(c => c.entrada)
        .sort((a, b) => new Date(b.entrada) - new Date(a.entrada))
        .slice(0, 10);
}

// 🔟 Clientes há mais tempo sem contato
function clientesMaisTempoSemContato() {
    return dadosOnboarding
        .filter(c => typeof c.diasSemContato === "number")
        .sort((a, b) => b.diasSemContato - a.diasSemContato)
        .slice(0, 10);
}

// 💰 5 maiores boletos
function maioresBoletos() {
    return dadosOngoing
        .filter(c => c.boleto > 0)
        .sort((a, b) => b.boleto - a.boleto)
        .slice(0, 5);
}

function renderTabelaSimples(dados, elementId, colunas) {
    const div = document.getElementById(elementId);

    if (!dados.length) {
        div.innerHTML = "Sem dados";
        return;
    }

    let html = "<table><thead><tr>";
    colunas.forEach(c => html += `<th>${c}</th>`);
    html += "</tr></thead><tbody>";

    dados.forEach(l => {
        html += "<tr>";
        colunas.forEach(c => html += `<td>${l[c] ?? ""}</td>`);
        html += "</tr>";
    });

    html += "</tbody></table>";
    div.innerHTML = html;
}