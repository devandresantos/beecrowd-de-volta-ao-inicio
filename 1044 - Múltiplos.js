const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');

const [num1, num2] = entrada.split(' ').sort((a, b) => a - b);

if(num2 % num1 === 0)
	console.log('Sao Multiplos');
else
	console.log('Nao sao Multiplos');