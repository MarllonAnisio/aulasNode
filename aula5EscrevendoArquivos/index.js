const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const ler = require('./modules/ler');
const escrever = require('./modules/escrever');

async function lerArquivos(caminho){
    const dados = await ler(caminho);
    renderzDados(dados);
}

async function escreverArquivos(caminho, dados){
    const dadosEmString = JSON.stringify(dados, null, 2);
    await escrever(caminho, dadosEmString);
}
function renderzDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome + " tem " + val.idade + " Anos"));
}

const dados = [
    {
        nome: 'João',
        idade: 30,
    },
        {
        nome: 'erika',
        idade: 22,
    },
        {
        nome: 'marllon',
        idade: 22,
    },
        {
        nome: 'Emily',
        idade: 21,
    },
        {
        nome: 'vincent',
        idade: 36,
    },
        {
        nome: 'Nikolas',
        idade: 12,
    },
];
//escreverArquivos(caminhoArquivo, dados)
//    .then(() => console.log('Arquivo escrito com sucesso!'))
//   .catch(err => console.log(err))

lerArquivos(caminhoArquivo)
    .then(() => console.log('Arquivo lido com sucesso!'))
    .catch(err => console.log(err))
