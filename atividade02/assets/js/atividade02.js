function calculo(){
let veiculo = document.querySelector('#veiculo-02').value;
let preco = Number(document.querySelector('#preco-02').value);

let entrada = Math.floor(preco/2);
let parcela = Math.floor((preco/2)/12);

let msgVeiculo = document.querySelector('#msgVeiculo-02');
let msgPreco = document.querySelector('#msgPreco-02');

msgVeiculo.innerText = `Promoção: ${veiculo}`;
msgPreco.innerText = `Entrada de R$: ${entrada} + 12x de R$:${parcela}`;
}


let botao02 = document.querySelector('#botao-02');
botao02.addEventListener('click', function(){
calculo();

})