function converte() {
  const resul = document.getElementById("resultado");
  resul.innerHTML = "";
  var temp = parseFloat(document.getElementById("temperatura").value);
  if (temp == "") {
    resul.innerHTML = "Digite um valor válido.";
  }
  if (isNaN(temp)) {
    resul.innerHTML = "Digite uma temperatura em NÚMEROS.";
  } else {
    var fahre = temp * 1.8 + 32;
    resul.innerHTML = fahre;
  }
}

function celsius() {
  const resul = document.getElementById("resultado");
  resul.innerHTML = "";
  var temp = parseFloat(document.getElementById("temperatura").value);
  if (temp == "") {
    resul.innerHTML = "Digite um valor válido.";
  }
  if (isNaN(temp)) {
    resul.innerHTML = "Digite uma temperatura em NÚMEROS.";
  } else {
    var celsius = (temp - 32) / 1.8;
    resul.innerHTML = celsius;
  }
}
