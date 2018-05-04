/**
 * Este modulo possui duas funcoes: vogais e consoantes
 *
 * A funcao vogais recebe uma palavra e retorna uma lista contendo as vogais da palavra.
 *
 * Exemplo:
 *
 * letras.vogais('pessoa') // ['e', 'o', 'a']
 *
 * A funcao consoante recebe uma palavra e retorna uma lista contendo
 as consoantes da palavra.
 *
 * letras.consoantes('pessoa') // ['p', 's', 's']
 */

const VOGAIS = ['a', 'e', 'i', 'o', 'u', 'é', 'è', 'ê', 'ó', 'ò', 'õ', 'ô', 'á', 'à', 'ã', 'â']

const vogais = (palavra = '') => [...palavra.toLowerCase()].filter(letra => VOGAIS.includes(letra))

const consoantes = (palavra = '') => [...palavra.toLowerCase()].filter(letra => !VOGAIS.includes(letra))

module.exports = {vogais, consoantes}
