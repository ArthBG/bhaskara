
function bhask() {
    // número 1
    let a = Number(document.getElementById("n1").value);
    // número 2
    let b = Number(document.getElementById("n2").value);
    // número 3
    let c = Number(document.getElementById("n3").value);

    // calculo de delta
    let delta = -4 * a * c;
    // calculo de divisão da raiz
    let dividir = 2 * a;
    // calculo de b ao quadrado
    let expo = b * b;
    // calculo de o que esta na raiz
    let delt = expo + delta;
    // calculo de raiz
    let raiz = Math.sqrt(delt);
    // calculo de possibilidade positiva
    let positivo = -b + raiz;
    // calculo de possibilidade negativa
    let negativo = -b - raiz;
    // calculo de x1
    let divp = positivo / dividir;
    // calculo de x2
    let divn = negativo / dividir;
    


    //o que esta na raiz menor que 0 
    if (delt < 0) {
        console.log(delt);
        document.getElementById("x1").innerHTML = "O delta é negativo. Equação não possui raízes reais";
        return;
    }
    //o que esta na raiz for igual a 0
    else if (delta == 0) {
        document.getElementById("x1").innerHTML = `Só existe uma raiz real que é: ${divp}`;
        document.getElementById("x2").innerHTML = `Só existe uma raiz real que é: ${divp}`;
        

    }
    //se o x1 é par
    else if (divp % 2 == 0) {
        document.getElementById("x11").innerHTML = "x1 é par ";
    }  //se o x1 é impar 
    else {
        document.getElementById("x11").innerHTML = "x1 é ímpar ";
    //se o x2 é par
    }  if (divn % 2 == 0) {
        document.getElementById("x21").innerHTML = "x2 é par ";
    }//se o x2 é impar
    else {
        document.getElementById("x21").innerHTML = "x2 é ímpar ";

    }
    //se o x1 é menor que x2
    if (divp < divn) {
        document.getElementById("x1").innerHTML = `x1 é igual: ${divn}`;
        document.getElementById("x2").innerHTML = `x2 é igual: ${divp}`;
    } //se não for menor
    else {
        document.getElementById("x1").innerHTML = `x1 é igual: ${divp}`;
        document.getElementById("x2").innerHTML = `x2 é igual: ${divn}`;
    }
    //resultado final 
    /*
   console.log(delta);
   console.log(dividir);
   console.log(expo);
   console.log(delt);
   console.log(raiz);
   console.log(positivo);
   console.log(negativo);
   console.log(divp);
   console.log(divn);
   */
}









