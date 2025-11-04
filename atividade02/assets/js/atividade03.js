function calculo(){
let quilo = Number(document.querySelector('#quilo-03').value);
let consumo = Number(document.querySelector('#consumo-03').value);

let convercao = (consumo/1000)*(quilo);



let msgConsumo = document.querySelector('#msgConsumo-03');


msgConsumo.innerText = `Valor a pagar: ${convercao}`;
}


let botao03 = document.querySelector('#botao-03');
botao03.addEventListener('click', function(){
calculo();

})