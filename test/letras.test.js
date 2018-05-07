const letras = require('../src/letras.js')

describe('letras', () => {

  it('Mostra as vogais', () => {
    expect(letras.vogais('pessoa')).toEqual(['e','o','a'])
  })

  it('Mostra as consoantes', () => {
    expect(letras.consoantes('pessoa')).toEqual(['p','s','s'])
  })

  it('Mostrar as vogais com acentos', () => {
    expect(letras.vogais('éèêóòõôáàãâ')).toEqual(['é', 'è', 'ê', 'ó', 'ò', 'õ', 'ô', 'á', 'à', 'ã', 'â'])
  })

})
