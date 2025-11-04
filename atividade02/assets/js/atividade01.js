function calculo(){
let titulo = document.querySelector('#titulo-01').value;
let duracao = Number(document.querySelector('#duracao-01').value);

let horas = Math.floor(duracao/60);
let minutos = duracao % 60;


let msgTitulo = document.querySelector('#msgTitulo-01');
let msgDuracao = document.querySelector('#msgDuracao-01');

msgTitulo.innerText = `Titulo: ${titulo}`;
msgDuracao.innerText = `Duracao: ${horas} horas(s) e ${minutos}min.`;

}



let botao1 = document.querySelector('#botao-01');
botao1.addEventListener('click', function(){
calculo();

})