const entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
const linhas = entrada.split('\n').slice(1);

linhas.forEach(linha => {
	if(linha !== '') {
		if(linha.trim() == '') {
			console.log(' ');
		} else {
			const mensagem = linha.split(/ {1,}/).map(palavra => palavra.charAt()).join('');
			console.log(mensagem);
		}
	}
});