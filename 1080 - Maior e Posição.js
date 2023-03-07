const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numeros = entrada.split('\n').map(Number);

const maiorNumero = Math.max(...numeros);
const posicaoMaiorNumero = numeros.indexOf(maiorNumero) + 1;

console.log(maiorNumero);
console.log(posicaoMaiorNumero);