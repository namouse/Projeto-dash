alert("JSMAIN CARREGOU");

async function atualizarDashboard() {
    await carregarDados();

    // métricas
    if (typeof renderMetricas === "function") {
        renderMetricas();
    }

    // tabelas
    if (typeof renderTabela === "function") {
        renderTabela(clientesMaisNovos(), "clientesNovos");
        renderTabela(maioresBoletos(), "maioresBoletos");
    }
}

document.getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

// carrega ao abrir
atualizarDashboard();