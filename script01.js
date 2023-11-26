function par() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    var numpar = document.getElementById('valor').value;
    if (numpar == "") {
        resultado.innerHTML = "Espaço vazio, digite um número!";
    }
    else {
        if (isNaN(numpar)) {
            resultado.innerHTML = "Valor inválido, digite um número!"
        }
        else {
            var soma = 0;
            resultado.innerHTML = "Números pares: ";
            for (var x = 0; x <= numpar; x++) {
                var resul = [x];
                resultado.innerHTML += x + "  ";
                soma += x;
                x++;
            }
        }
        const conta = document.getElementById('soma');
        conta.innerHTML = "Resultado da soma dos números: " + soma;
    }
}