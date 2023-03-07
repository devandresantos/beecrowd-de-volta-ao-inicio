const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');

const numeros = entrada.split(' ').map(Number);

const numOrdenados = [...numeros].sort((a, b) => a - b);

console.log(numOrdenados[0]);
console.log(numOrdenados[1]);
console.log(numOrdenados[2]);

console.log('');

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);