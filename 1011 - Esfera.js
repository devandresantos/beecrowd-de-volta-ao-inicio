const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const raio = parseInt(entrada);

const PI = 3.14159;

const volume = (4.0 / 3) * PI * (raio ** 3);

console.log(`VOLUME = ${ volume.toFixed(3) }`);