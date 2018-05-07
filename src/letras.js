/**
 * Este modulo possui duas funcoes: vogais e consoantes
 *
 * A funcao vogais recebe uma palavra e retorna uma lista contendo as vogais da palavra.
 *
 * Exemplo:
 *
 * letras.vogais('pessoa') // ['e', 'o', 'a']
 *
 * A funcao consoante recebe uma palavra e retorna uma lista contendo as consoantes da palavra.
 *
 * letras.consoantes('pessoa') // ['p', 's', 's']
 */

const VOGAIS = ['a', 'e', 'i', 'o', 'u']

const vogais = (palavra = '') => [...palavra.toLowerCase()].filter(letra => VOGAIS.includes(letra))


const consoantes = (palavra = '') => [...palavra.toLowerCase()].filter(letra => !VOGAIS.includes(letra))



const removerAcentos = (palavra)=> {
  let novaPalavra = palavra
	let mapaAcentosHex 	= {
		a : /[\xE0-\xE6]/g,
		e : /[\xE8-\xEB]/g,
		i : /[\xEC-\xEF]/g,
		o : /[\xF2-\xF6]/g,
		u : /[\xF9-\xFC]/g
	}

	for ( let letra in mapaAcentosHex ) {
		let expressaoRegular = mapaAcentosHex[letra]
		novaPalavra = novaPalavra.replace( expressaoRegular, letra )
	}
  return vogais(novaPalavra)
}

console.log(removerAcentos('Láúó'));

module.exports = {vogais, consoantes, removerAcentos}
