/*function crime(){

    let sim1 = document.getElementById("sim1").checked;
    let sim2 = document.getElementById("sim2").checked;
    let sim3 = document.getElementById("sim3").checked;
    let sim4 = document.getElementById("sim4").checked;
    let sim5 = document.getElementById("sim5").checked;

    let verifique = 0;

    if(sim1 == true){
        verifique ++;
    }
     if(sim2 == true){
        verifique ++;
    }
     if(sim3 == true){
        verifique ++;
    }
     if(sim4 == true){
        verifique ++;
    }
     if(sim5 == true){
        verifique ++;
    }


    if(verifique == 2){
        document.getElementById("resultado").innerHTML = "suspeito";
    }
    if(verifique == 3 || verifique == 4){
        document.getElementById("resultado").innerHTML = "cumplice";
    }
    if(verifique == 5){
        document.getElementById("resultado").innerHTML = "assasino";
    }
    if(verifique < 2){
        document.getElementById("resultado").innerHTML = "inocente";
    }

}
    */

/*
;
function caixa() {
    let saque = document.getElementById("saque").value;
    let contador100 = 100;
    let contador50 = 50;
    let contador10 = 10;
    let contador5 = 5;
    let contador1 = 1;

        if (saque >=10 && saque <= 1000) {
            contador100 = parseInt(saque / 100);
            saque = saque % 100;
            contador50 = parseInt(saque / 50);
            saque = saque % 50;
            contador10 = parseInt(saque / 10);
            saque = saque % 10;
            contador5 = parseInt(saque / 5);
            saque = saque % 5;
            contador1 = parseInt(saque / 1);
            saque = saque % 1;

        document.getElementById("result").innerHTML = `A quantidade de notas 100 é: ${contador100}`;
        document.getElementById("result2").innerHTML =`A quantidade de notas 50 é: ${contador50}`;
        document.getElementById("result3").innerHTML =`A quantidade de notas 10 é: ${contador10}`;
        document.getElementById("result4").innerHTML =`A quantidade de notas 5 é:  ${contador5}`;
        document.getElementById("result5").innerHTML =`A quantidade de notas 1 é:  ${contador1}`;

        } else if (saque <= 10 || saque > 1000){ 
            document.getElementById("result").innerHTML = `Digite um valor válido`;
            document.getElementById("result2").innerHTML =` `;
            document.getElementById("result3").innerHTML =` `;
            document.getElementById("result4").innerHTML =` `;
            document.getElementById("result5").innerHTML =` `;

        }
        
    }*/
function bhask() {
    // número 1
    let a = Number(document.getElementById("n1").value);
    // número 2
    let b = Number(document.getElementById("n2").value);
    // número 3
    let c = Number(document.getElementById("n3").value);
    // raiz de 2

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
    // divp for par

    // divn for par


    //o que esta na raiz menor que 0 
    if (delt < 0) {
        console.log(delt);
        document.getElementById("x1").innerHTML = "O delta é negativo. Equação não possui raízes reais";
        return;
    }
    //o que esta na raiz for igual a 0
    else if (delt == 0) {
        console.log(delta);
        document.getElementById("x1").innerHTML = `Só existe uma raiz real que é: ${divp}`;

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
    } //se não for
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









