function renderTabela(dados, containerId) {
    let html = "";

    for (let atendente in dados) {
        html += `<h3>${atendente}</h3>`;
        html += `<table>
            <tr>
                <th>Cliente</th>
                <th>Data Entrada</th>
                <th>Valor Boleto</th>
            </tr>`;

        dados[atendente].forEach(c => {
            html += `<tr>
                <td>${c["nome do cliente"]}</td>
                <td>${c["data de entrada"]}</td>
                <td>R$ ${c["valor do boleto mais atual"]}</td>
            </tr>`;
        });

        html += `</table>`;
    }

    document.getElementById(containerId).innerHTML = html;
}

function renderMetricas() {
    document.getElementById("metricas").innerHTML = `
        <p><strong>Total de clientes:</strong> ${DADOS.length}</p>
    `;
}

function renderDebug() {
    document.getElementById("clientesNovos").innerHTML =
        "<pre>" + JSON.stringify(DADOS.slice(0, 2), null, 2) + "</pre>";
}