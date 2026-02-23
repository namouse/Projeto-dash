function clientesMaisNovos() {
    return [...dados]
        .sort((a, b) => new Date(b.entrada) - new Date(a.entrada))
        .slice(0, 5);
}

function maioresBoletos() {
    return [...dados]
        .sort((a, b) => b.boleto - a.boleto)
        .slice(0, 5);
}

function renderTabela(lista, id) {
    const div = document.getElementById(id);

    if (!lista.length) {
        div.innerHTML = "Sem dados";
        return;
    }

    let html = `
        <table>
            <tr>
                <th>Cliente</th>
                <th>Atendente</th>
                <th>Entrada</th>
                <th>Boleto</th>
                <th>Origem</th>
            </tr>
    `;

    lista.forEach(i => {
        html += `
            <tr>
                <td>${i.cliente}</td>
                <td>${i.atendente}</td>
                <td>${i.entrada}</td>
                <td>R$ ${i.boleto.toFixed(2)}</td>
                <td>${i.origem}</td>
            </tr>
        `;
    });

    html += "</table>";
    div.innerHTML = html;
}