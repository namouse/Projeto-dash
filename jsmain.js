alert("JSMAIN CARREGOU");

async function atualizarDashboard() {
    await carregarDados();

    renderMetricas();
    renderTabela(clientesMaisNovos(), "clientesNovos");
    renderTabela(maioresBoletos(), "maioresBoletos");

    renderGraficos(dadosGerais); // 👈 AQUI
}

document.getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

atualizarDashboard();