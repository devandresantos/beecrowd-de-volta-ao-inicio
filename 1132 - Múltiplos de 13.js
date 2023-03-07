const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numeros = entrada.split('\n').map(num => parseInt(num));
const [numX, numY] = numeros.sort((a, b) => a - b);

let soma = 0;

for(let i = numX; i <= numY; i++) {
	if(i % 13 != 0)
		soma += i;
}

console.log(soma);