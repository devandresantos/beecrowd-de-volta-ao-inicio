const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numero = parseInt(entrada);

for(let i = 1; i <= numero; i++) {
	console.log(`${ i } ${ i ** 2 } ${ i ** 3 }`);
	console.log(`${ i } ${ i ** 2 + 1 } ${ i ** 3 + 1 }`);
}