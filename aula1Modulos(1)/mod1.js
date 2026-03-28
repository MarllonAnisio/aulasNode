const nome = "marllon";
const sobrenome = "Anisio";

const falaNome = ( ) => nome + " " + sobrenome;

// por padrão poderiamos exportar com module.exports.mome = nome etc, 
// mas é uma configuração que deixa tudo mais complicado, mais boilerplate
// então podemos aliviar e exportar apenas com exports.nome = nome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//esses exports são objetos, então podemos importar em outra parte usando o require

// do mesmo jeito posso exportar uma classe: 
class Pessoa {
    constructor(nome, sobrenome, idade, altura, tipoSanguineo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
        this.tipoSanguineo = tipoSanguineo;
    }
    get nome(){
        return this._nome;
    }
    set nome(novoNome){
        this._nome = novoNome;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos, minha altura é ${this.altura} e meu tipo sanguíneo é ${this.tipoSanguineo}`;
    }
    // bla bla bla
}
exports.Pessoa = Pessoa; // estou exportando uma classe inteira dessa forma, vamos ver como fica no app.js