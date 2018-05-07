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

const CONSOANTES = ['b', 'd', 'r', 't', 'p', 'f', 'g', 'h', 'j', 'k', 'z', 'c', 'v', 'n', 'm', 'l', 'q', 's']

const vogais = (palavra = '') => [...palavra.toLowerCase()].filter(letra => !CONSOANTES.includes(letra))


const consoantes = (palavra = '') => [...palavra.toLowerCase()].filter(letra => CONSOANTES.includes(letra))

module.exports = {vogais, consoantes}
