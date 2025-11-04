function calculo(){
let valor = Number(document.querySelector('#valor-05').value);
let tempo = Number(document.querySelector('#tempo-05').value);



let calcular = Math.ceil(tempo/15)*(valor);




let msgTempo = document.querySelector('#msgTempo-05');


msgTempo.innerText = `Valor a pagar R$: ${calcular}`;
}


let botao05 = document.querySelector('#botao-05');
botao05.addEventListener('click', function(){
calculo();

})