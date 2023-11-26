function calc() {
    var combus = parseFloat(document.getElementById('valorl').value);
    var kms = parseFloat(document.getElementById('km').value);

    var litros = kms / 8;
    var preco = litros * combus;

    const resul = document.getElementById('resu');
    resul.innerHTML = "O valor gasto será de: R$ " + preco.toFixed(2);
}