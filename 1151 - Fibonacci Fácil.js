const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const numEntrada = parseInt(entrada);
let numAnterior = 0, numAtual = 1, sequencia = '0 1 ';

if(numEntrada == 1) {
	console.log('0');
} else {
	if(numEntrada == 2) {
		console.log('0 1');
	} else {
		const numeroFinal = numEntrada - 2;

		for(let i = numAnterior; i < numeroFinal; i++) {
			const ultimaSoma = numAnterior + numAtual;
			sequencia += `${ ultimaSoma } `;
			numAnterior = numAtual;
			numAtual = ultimaSoma;
		}

		console.log(sequencia.trim());
	}
}