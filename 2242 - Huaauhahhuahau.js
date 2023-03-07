const risada = require('fs').readFileSync('/dev/stdin', 'utf8');
const soVogais = risada.replace(/[^aeiou]/g, '');
const METADE_TAM_VOGAIS = soVogais.length / 2;

const leituraEsqParaDir = soVogais.slice(0, Math.floor(METADE_TAM_VOGAIS));
const leituraDirParaEsq = soVogais.slice(Math.ceil(METADE_TAM_VOGAIS)).split('').reverse().join('');

if(leituraEsqParaDir == leituraDirParaEsq)
	console.log('S');
else
	console.log('N');