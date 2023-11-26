function calc() {
    var qtd1 = parseFloat(document.getElementById('qtdprod1').value);
    var valor1 = parseFloat(document.getElementById('valorprod1').value);
    var qtd2 = parseFloat(document.getElementById('qtdprod2').value);
    var valor2 = parseFloat(document.getElementById('valorprod2').value);
    var qtd3 = parseFloat(document.getElementById('qtdprod3').value);
    var valor3 = parseFloat(document.getElementById('valorprod3').value);

    var resul = (qtd1 * valor1) + (qtd2 * valor2) + (qtd3 * valor3);
    const resultado = document.getElementById('resul');

    if (isNaN(resul)) {
        resultado.innerHTML = "Digite um valor válido."
    }
    else {
        resultado.innerHTML = "Valor total: " + "R$ " + resul.toFixed(2);
    }
}