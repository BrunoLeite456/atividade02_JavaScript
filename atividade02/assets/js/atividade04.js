function calculo(){
let medicamento = document.querySelector('#medicamento-04').value;
let preco = Number(document.querySelector('#preco-04').value);


let desconto = Math.floor(preco*2);


let msgMedicamento = document.querySelector('#msgMedicamento-04');
let msgPreco04 = document.querySelector('#msgPreco-04');

msgMedicamento.innerText = `Promoção de  ${medicamento}`;
msgPreco04.innerText = `Leve 2 por apenas R$: ${desconto}`;
}


let botao04 = document.querySelector('#botao-04');
botao04.addEventListener('click', function(){
calculo();

})