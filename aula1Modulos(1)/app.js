const mod1 = require("./mod1"); // estou pegando o modulo um inteiro todos os meus exports de mod1
const falaNome = mod1.falaNome; // aqui estou pegando uma função especifica do modulo.

console.log(falaNome());

// podemos fazer desestruturação
const { nome, sobrenome, falaNome: fala} = require('./mod1'); // como já visto ele vai buscar o nome, sobrenome e falaNome do modulo, e aqui eu renomeei a função para fala

console.log(nome, sobrenome);
console.log(fala())

const Pessoa = require("./mod1").Pessoa; // aqui estou pegando a classe Pessoa do modulo, e posso criar um objeto a partir dela

const pessoa1 = new Pessoa("Marllon", "Anisio", 30, 1.80, "O+");

console.log(pessoa1.apresentar());