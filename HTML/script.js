const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const conta = document.getElementById("conta");
let p = document.getElementById("ValorFinal");
let r = 0;
function resultar() {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if (conta.value === "divisão" ||
        conta.value === "Divisão" ||
        conta.value === "divisao" ||
        conta.value === "Divisao" ||
        conta.value === "/"
    ) {
        r = number1 / number2;
        p.innerHTML = r;
    }
    else if (conta.value === "mais" ||
        conta.value === "Mais" ||
        conta.value === "+"
    ) {
        r = number1 + number2;
        p.innerHTML = r;
    }
    else if (conta.value === "Multiplicaçao" ||
        conta.value === "multiplicaçao" ||
        conta.value === "multiplicação" ||
        conta.value === "Multiplicação" ||
        conta.value === "Multiplicacão" ||
        conta.value === "multiplicacão" ||
        conta.value === "Multiplicacao" ||
        conta.value === "multiplicacao" ||
        conta.value === "vezes" ||
        conta.value === "Vezes" ||
        conta.value === "x" ||
        conta.value === "X" ||
        conta.value === "*"
    ) {
        r = number1 * number2;
        p.innerHTML = r;
    }
    else if (conta.value === "subtraçao" ||
        conta.value === "Subtraçao" ||
        conta.value === "subtração" ||
        conta.value === "Subtração" ||
        conta.value === "subtracão" ||
        conta.value === "Subtracão" ||
        conta.value === "subtracao" ||
        conta.value === "Subtracao" ||
        conta.value === "Menos" ||
        conta.value === "menos" ||
        conta.value === "-"
    ) {
        r = number1 - number2;
        p.innerHTML = r;
    }     else if (conta.value === ""
    ) {

    }

    else{
        alert("Não foi possível reconhecer o comando")
    }
}