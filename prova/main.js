const inputButton = document.querySelector("#input-button");
const inputField = document.querySelector("input");
const carrinhoField = document.querySelector("#carrinho-compras");

let listaAdicionados = [];

const subEvent = (e) => {
    quantidade =
        Number(
            e.target.parentNode.parentNode.childNodes[0].childNodes[2].innerHTML
        ) - 1;
    if (quantidade == 0) {
        e.target.parentNode.parentNode.remove();
        listaAdicionados.pop(
            e.target.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML
        );
    } else {
        e.target.parentNode.parentNode.childNodes[0].childNodes[2].innerHTML =
            quantidade;
    }
};

const addEvent = (e) => {
    quantidade =
        Number(
            e.target.parentNode.parentNode.childNodes[0].childNodes[2].innerHTML
        ) + 1;
    e.target.parentNode.parentNode.childNodes[0].childNodes[2].innerHTML =
        quantidade;
};

const addProdutoCarrinho = () => {
    inputValue = inputField.value;
    if (listaAdicionados.includes(inputValue)) {
    } else {
        li = document.createElement("li");

        buttonSub = document.createElement("button");
        buttonSub.id = "sub-button";
        buttonSub.innerHTML = "-";
        buttonSub.addEventListener("click", subEvent);

        buttonAdd = document.createElement("button");
        buttonAdd.id = "add-button";
        buttonAdd.innerHTML = "+";
        buttonAdd.addEventListener("click", addEvent);

        spanInfo = document.createElement("span");
        spanInfo.id = "span-info";
        spanButton = document.createElement("span");
        spanButton.id = "span-button";

        spanNome = document.createElement("span");
        spanNome.innerHTML = inputValue;
        spanQuantidade = document.createElement("span");
        spanQuantidade.innerHTML = 1;

        spanInfo.append(spanNome);
        spanInfo.innerHTML = `.Quantidade: `;
        spanInfo.append(spanQuantidade);

        spanButton.append(buttonSub);
        spanButton.append(buttonAdd);

        li.append(spanInfo);
        li.append(spanButton);

        carrinhoField.append(li);

        listaAdicionados.push(inputValue);
    }
};

inputButton.addEventListener("click", () => {
    if (!inputField.value) {
        alert("Nome do produto não pode ser vazio");
    } else {
        addProdutoCarrinho();
    }
});
