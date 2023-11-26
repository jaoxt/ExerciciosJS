function calc() {
    var larg = parseFloat(document.getElementById('larg').value);
    var alt = parseFloat(document.getElementById('alt').value);
    const resul = document.getElementById('resul');

    var area = larg * alt;
    
    var preco = area * 36;

    resul.innerHTML = "O valor total para assentar o piso será de: R$"+preco.toFixed(2);
}