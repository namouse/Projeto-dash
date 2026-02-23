alert("JSMAIN CARREGOU");
async function atualizarDashboard() {
    await carregarDados();
    renderMetricas();
    renderTabela(clientesMaisNovos(), "clientesNovos");
    renderTabela(maioresBoletos(), "maioresBoletos");
}

document.getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

atualizarDashboard();

async function atualizarDashboard() {
    await carregarDados();
    renderDebug();
}