function gerarRecibo() {
    document.getElementById('recibo_dono').innerHTML = document.getElementById('proprietario').value
    document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value
    document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-br', {minimumFractionDigits: 2});
    document.getElementById('recibo_data').innerHTML = dataAtual();
    window.print();
}
function dataAtual() {
    let data = new Date();
    return data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
}