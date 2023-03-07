const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const [num1, num2] = entrada.split('\n').map(Number);

const soma = num1 + num2;

console.log(`SOMA = ${ soma }`);