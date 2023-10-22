const fs = require('fs');

// Defina as posições de início e tamanho de cada coluna
const colunas = [
  { nome: 'gc-type', tipo: 'pos', inicio: 30, tamanho: 9 },
  { nome: 'size1-heap', tipo: 'pos', inicio: 39, tamanho: 6 },
  { nome: 'size2-heap', tipo: 'pos',inicio: 56, tamanho: 6 },
  { nome: 'gc-time', tipo: 'sub', pattern1: 'MB,', pattern2: '/'},
];

// Função para analisar uma linha de texto com base nas posições definidas
function parseLinha(linha) {
  const dados = {};
  colunas.forEach((coluna) => {

    if(coluna.tipo === 'pos') {
        const valor = linha.substr(coluna.inicio, coluna.tamanho).trim();
        dados[coluna.nome] = valor;
    } else if (coluna.tipo === 'sub') {
        const index1 = linha.indexOf(coluna.pattern1) + coluna.pattern1.length;
        const count = linha.indexOf(coluna.pattern2) - index1;
        const valor = linha.substr(index1, count).trim();
        dados[coluna.nome] = valor;
    }

  });
  return dados;
}

// Ler o arquivo de texto linha por linha

function parserFile(){

  const arquivo = 'dados.txt';
  const linhas = fs.readFileSync(arquivo, 'utf-8').split('\n');
  
  linhas.forEach((linha) => {
      if (linha.trim() !== '') {
        const dados = parseLinha(linha);
        console.log('Nome:', dados.nome);
        console.log('Sobrenome:', dados.sobrenome);
        console.log('Idade:', dados.idade);
        console.log('---');
      }
    });

}

parserFile();

module.exports = ParserFile;