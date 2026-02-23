alert("JSMAIN CARREGOU");

async function atualizarDashboard() {
    await carregarDados();

    document.getElementById("clientesNovos").innerHTML =
        "<pre>" + JSON.stringify(DADOS.slice(0, 2), null, 2) + "</pre>";
}

document.getElementById("btnAtualizar")
    .addEventListener("click", atualizarDashboard);

atualizarDashboard();