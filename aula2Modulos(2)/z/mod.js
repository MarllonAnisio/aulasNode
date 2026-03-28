module.exports = class Cachorro{
    constructor(nome, raca, idade){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    latir(){
        return "Au au!";
    }
}
