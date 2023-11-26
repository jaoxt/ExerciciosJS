var vetores = [];
        
        function adval() {
            var val = document.getElementById("val").value;
            vetores.push(parseFloat(val));
            document.getElementById("val").value = "";
        }
        
        function mostval() {
            document.getElementById("valinseri").innerHTML = "Foram inseridos os sequintes valores: " + vetores.join(", ");
        }
        
        function maiorval() {
            var maior = Math.max(...vetores);
            document.getElementById("valmaior").innerHTML = "O maior valor foi: " + maior;
        }
        
        function menorval() {
            var menor = Math.min(...vetores);
            document.getElementById("valmenor").innerHTML = "O menor valor foi: " + menor;
        }