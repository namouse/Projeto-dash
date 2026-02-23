function agruparPorAtendente() {
    return DADOS.reduce((acc, item) => {
        const atendente = item["atendente responsavel"];
        if (!acc[atendente]) acc[atendente] = [];
        acc[atendente].push(item);
        return acc;
    }, {});
}

function clientesMaisNovos() {
    const grupos = agruparPorAtendente();
    let resultado = {};

    for (let atendente in grupos) {
        resultado[atendente] = grupos[atendente]
            .sort((a, b) => new Date(b["data de entrada"]) - new Date(a["data de entrada"]))
            .slice(0, 5);
    }
    return resultado;
}

function maioresBoletos() {
    const grupos = agruparPorAtendente();
    let resultado = {};

    for (let atendente in grupos) {
        resultado[atendente] = grupos[atendente]
            .sort((a, b) => Number(b["valor do boleto mais atual"]) - Number(a["valor do boleto mais atual"]))
            .slice(0, 5);
    }
    return resultado;
}