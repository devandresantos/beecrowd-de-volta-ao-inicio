const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const valores = entrada.split(' ').map(Number);

const [valorA, valorB, valorC] = valores;

const delta = (valorB ** 2) - (4 * valorA * valorC);

if(valorA === 0 || delta < 0) {
	console.log('Impossivel calcular');
} else {
	const raiz1 = (- valorB + Math.sqrt(delta)) / (2 * valorA);
	const raiz2 = (- valorB - Math.sqrt(delta)) / (2 * valorA);

	console.log(`R1 = ${ raiz1.toFixed(5) }`);
	console.log(`R2 = ${ raiz2.toFixed(5) }`);
}