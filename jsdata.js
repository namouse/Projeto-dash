let dados = [];

async function carregarDados() {
    const onboarding = await fetchCSV(CONFIG.CSV_ONBOARDING);
    const ongoing = await fetchCSV(CONFIG.CSV_ONGOING);

    const normalizar = (linha, origem) => ({
        cliente: linha["2 - Cliente"]?.trim(),
        atendente: linha["Aten"]?.trim(),
        entrada: linha["4 - Entrada"],
        boleto: parseMoeda(linha["6 - Ultimo boleto"]),
        origem
    });

    dados = [
        ...onboarding.map(l => normalizar(l, "Onboarding")),
        ...ongoing.map(l => normalizar(l, "Ongoing"))
    ].filter(d => d.cliente && d.atendente);
}

function parseMoeda(v) {
    if (!v) return 0;
    return Number(
        v.replace("R$", "")
         .replace(".", "")
         .replace(",", ".")
         .trim()
    ) || 0;
}