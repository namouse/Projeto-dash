let DADOS = [];

async function carregarDados() {
    const onboarding = await fetchCSV(CONFIG.CSV_ONBOARDING);
    const ongoing = await fetchCSV(CONFIG.CSV_ONGOING);

    DADOS = [...onboarding, ...ongoing];

    console.log("Dados carregados:", DADOS.length);
    console.log("Exemplo:", DADOS[0]);
}