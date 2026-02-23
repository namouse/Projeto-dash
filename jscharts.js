let chartClientes;
let chartFaturamento;
let chartBase;

function renderGraficos(dados) {

    const porAtendente = {};

    dados.forEach(c => {
        const atendente = c.atendente;
        const boleto = Number(c.valorBoleto) || 0;
        const baseDesat = Number(c.percentualDesatualizada) || 0;

        if (!porAtendente[atendente]) {
            porAtendente[atendente] = {
                clientes: 0,
                faturamento: 0,
                baseDesat: []
            };
        }

        porAtendente[atendente].clientes += 1;
        porAtendente[atendente].faturamento += boleto;
        porAtendente[atendente].baseDesat.push(baseDesat);
    });

    const labels = Object.keys(porAtendente);

    const clientesData = labels.map(a => porAtendente[a].clientes);
    const faturamentoData = labels.map(a => porAtendente[a].faturamento);
    const baseMedia = labels.map(a => {
        const arr = porAtendente[a].baseDesat;
        return arr.reduce((s, v) => s + v, 0) / arr.length;
    });

    // 🔹 Limpa gráficos antigos
    chartClientes?.destroy();
    chartFaturamento?.destroy();
    chartBase?.destroy();

    chartClientes = new Chart(document.getElementById("graficoClientesAtendente"), {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Clientes por atendente",
                data: clientesData
            }]
        }
    });

    chartFaturamento = new Chart(document.getElementById("graficoFaturamentoAtendente"), {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Faturamento total (R$)",
                data: faturamentoData
            }]
        }
    });

    chartBase = new Chart(document.getElementById("graficoBaseDesatualizada"), {
        type: "pie",
        data: {
            labels,
            datasets: [{
                label: "% Base desatualizada (média)",
                data: baseMedia
            }]
        }
    });
}