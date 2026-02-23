let dadosOnboarding = [];
let dadosOngoing = [];

async function carregarDados() {

    // 🔹 ONBOARDING
    const onboarding = await fetchCSV(CONFIG.CSV_ONBOARDING);

    dadosOnboarding = onboarding.map(l => ({
        cliente: l["2 - Cliente"]?.trim(),
        atendente: l["Aten"]?.trim(),
        entrada: l["4 - Entrada"],
        diasSemContato: Number(l["13 - Dias do ultimo contato"]) || null
    })).filter(d => d.cliente);

    // 🔹 ONGOING
    const ongoing = await fetchCSV(CONFIG.CSV_ONGOING);

    dadosOngoing = ongoing.map(l => ({
        cliente: l["2 - Cliente"]?.trim(),
        atendente: l["Aten"]?.trim(),
        boleto: parseMoeda(l["6 - Ultimo boleto"])
    })).filter(d => d.cliente);
}

function parseMoeda(valor) {
    if (!valor) return 0;
    return Number(
        valor.replace("R$", "")
             .replace(".", "")
             .replace(",", ".")
             .trim()
    ) || 0;
}