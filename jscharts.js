let grafClientes;
let grafFaturamento;

function renderGraficos() {
    const porAtendente = {};

    dados.forEach(d => {
        if (!porAtendente[d.atendente]) {
            porAtendente[d.atendente] = { clientes: 0, faturamento: 0 };
        }
        porAtendente[d.atendente].clientes++;
        porAtendente[d.atendente].faturamento += d.boleto;
    });

    const labels = Object.keys(porAtendente);
    const clientes = labels.map(a => porAtendente[a].clientes);
    const faturamento = labels.map(a => porAtendente[a].faturamento);

    grafClientes?.destroy();
    grafFaturamento?.destroy();

    grafClientes = new Chart(document.getElementById("graficoClientes"), {
        type: "bar",
        data: {
            labels,
            datasets: [{ label: "Clientes", data: clientes }]
        }
    });

    grafFaturamento = new Chart(document.getElementById("graficoFaturamento"), {
        type: "bar",
        data: {
            labels,
            datasets: [{ label: "Faturamento (R$)", data: faturamento }]
        }
    });
}