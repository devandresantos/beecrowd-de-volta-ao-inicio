const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numeros = entrada.split('\n').map(Number);
const qtdeNumLidos = numeros[0];
let numIn = 0, numOut = 0;

for(let i = 1; i <= qtdeNumLidos; i++) {
	const num = numeros[i];

	if(num < 10 || num > 20)
		numOut++;
	else
		numIn++;
}

console.log(`${ numIn } in`);
console.log(`${ numOut } out`);