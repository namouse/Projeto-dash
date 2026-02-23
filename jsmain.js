async function atualizarDashboard() {
    await carregarDados();

    renderTabelaSimples(
        clientesMaisTempoSemContato(),
        "clientesSemContato",
        ["cliente", "diasSemContato"]
    );

    renderTabelaSimples(
        clientesMaisNovos(),
        "clientesNovos",
        ["cliente", "entrada"]
    );

    renderTabelaSimples(
        maioresBoletos(),
        "maioresBoletos",
        ["cliente", "boleto"]
    );
}

document
    .getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

atualizarDashboard();