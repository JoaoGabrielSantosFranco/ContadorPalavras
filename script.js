function contarFrequencia() {
    texto = document.getElementById("Frase").value
    palavra = texto.split(/[\s,]+/);
    console.log("array: "+palavra);
    palavraBuscada = document.getElementById("PalavraBuscada").value
    console.log(palavraBuscada + " palavra busca ")

    var contador = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] == palavraBuscada) {
            console.log(palavra[i] + " E " + palavraBuscada + " São iguais")
            contador++;
        }
        else {
            console.log(palavra[i] + " E " + palavraBuscada + " Não São iguais")
        }
    }
    document.getElementById("saida").innerHTML = "A palavra " +palavraBuscada +  " Repetiu " + contador + " Vezes ";
}




