const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numero = parseInt(entrada);

for(let i = 1; i <= numero; i++) {
	if(i % 2 == 0)
		console.log(`${ i }^2 = ${ i ** 2 }`);
}