function calculo(){
let produto = document.querySelector('#produto-06').value;
let preco = Number(document.querySelector('#preco-06').value);

let desconto = (preco/2);
let valor = ((preco*2)+desconto);

let msgProduto = document.querySelector('#msgProduto-06');
let msgPreco = document.querySelector('#msgPreco-06');

msgProduto.innerText = `${produto}- Promoção: Leve 3 por R$${valor}`;
msgPreco.innerText = `O 3º produto custa apenas R$: ${desconto}`;
}


let botao06 = document.querySelector('#botao-06');
botao06.addEventListener('click', function(){
calculo();

})