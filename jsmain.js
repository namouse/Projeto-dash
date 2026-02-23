async function atualizarDashboard() {
    await carregarDados();

    renderTabela(clientesMaisNovos(), "clientesNovos");
    renderTabela(maioresBoletos(), "maioresBoletos");
    renderGraficos();
}

document.getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

atualizarDashboard();