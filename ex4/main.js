const botaoGerar = document.querySelector("#btnGerarQ");
const botaoValidar = document.querySelector("#btnValidarRes");
const labelEqua = document.querySelector("#idAreaEquacao");
const labelResp = document.querySelector("#idAreaResp");
const inputResp = document.querySelector("#resposta");

let result = null;

function generateEqua() {
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let op = Math.floor(Math.random() * 10) % 3;
    let result;
    let equation;

    switch (op) {
        case 0:
            result = n1 + n2;
            equation = `${n1} + ${n2}`;
            break;
        case 1:
            result = n1 - n2;
            equation = `${n1} - ${n2}`;
            break;
        case 2:
            result = n1 * n2;
            equation = `${n1} * ${n2}`;
            break;
    }

    return [result, equation];
}

botaoGerar.addEventListener("click", () => {
    res = generateEqua();
    labelEqua.innerHTML = res[1];
    labelEqua.style.color = "#000000";
    result = res[0];
    console.log(result);
});

botaoValidar.addEventListener("click", () => {
    if (result != null) {
        let resp = Number(inputResp.value);
        if (isNaN(resp)) {
            labelResp.innerHTML = "Erro, a resposta deve ser um número.";
            labelResp.style.color = "red";
        } else {
            if (resp == result) {
                labelResp.innerHTML = `Parabéns!`;
                labelResp.style.color = "green";
            }
            else {
                labelResp.innerHTML = `Deu Ruim! A resposta correta é ${result}`;
                labelResp.style.color = "red";
            }
        }
    }
});
