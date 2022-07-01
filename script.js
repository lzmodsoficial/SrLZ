var text = document.querySelector('.text');
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);
function animate(){
if(count == 100 && per == 400){
text.textContent = "Completado.";
text.style.fontSize = "70px";
text.classList.add("add");
clearInterval(loading);
}else{
per = per + 4;
count = count + 1;
progress.style.width = per + 'px';
percent.textContent = count + '%';
}
}
var div = document.getElementById('log');
var texto = "Carregando Site...";

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);

var div = document.getElementById('escre');
var texto = `adicionando novas apis`;

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);

var div = document.getElementById('testololizita');
var texto = `</lzmods-api/>`;

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);

var div = document.getElementById('escrever');
var texto = `carregando apis do banco de dados`;

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);
var div = document.getElementById('escrevi');
var texto = ` organizando apis`;

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);
var div = document.getElementById('escrevir');
var texto = ` Seja bem vindo a lolizita Rest api`;

function escrever(str, el) {
var char = str.split('').reverse();
var typer = setInterval(function() {
if (!char.length) return clearInterval(typer);
var next = char.pop();
el.innerHTML += next;
}, 100);
}

escrever(texto, div);
