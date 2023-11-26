function calc() {
    var sexo = document.getElementById('sexo').value;
    const resul = document.getElementById('resul');
    if (sexo === "h") {
        var alt = parseFloat(document.getElementById('alt').value);
        var peso = (72.7 * alt) - 58;
        resul.innerHTML = "O peso ideal é de: " + peso.toFixed(2) + " KG.";
    }
    if (sexo === "m") {
        var alt = parseFloat(document.getElementById('alt').value);
        var peso = (62.1 * alt) - 44.7;
        resul.innerHTML = "O peso ideal é de: " + peso.toFixed(2) + " KG."; 
    }
}