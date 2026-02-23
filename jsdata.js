let DADOS = [];

async function carregarDados() {
    console.log("Iniciando carregamento CSV...");

    const onboarding = await fetchCSV(CONFIG.CSV_ONBOARDING);
    console.log("Onboarding:", onboarding.length, onboarding[0]);

    const ongoing = await fetchCSV(CONFIG.CSV_ONGOING);
    console.log("Ongoing:", ongoing.length, ongoing[0]);

    DADOS = [...onboarding, ...ongoing];

    console.log("TOTAL DADOS:", DADOS.length);
}