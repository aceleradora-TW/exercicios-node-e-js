const VOGAIS = [
  'a', 'ã', 'á', 'â',
  'e', 'é', 'ê',
  'i', 'í',
  'o', 'ó', 'õ', 'ô',
  'u', 'ú'
]

const vogais = (palavra = '') => [...palavra.toLowerCase()].filter(letra => VOGAIS.includes(letra))

const consoantes = (palavra = '') => [...palavra.toLowerCase()].filter(letra => !VOGAIS.includes(letra))

module.exports = {vogais, consoantes}
