const letras = require('../src/letras')

describe('O módulo letras', () => {

  it('filtra as vogais de uma palavra de forma case-insensitive', () => {
    expect(letras.vogais('pessoa')).toEqual(['e', 'o', 'a'])
    expect(letras.vogais('PESSOA')).toEqual(['e', 'o', 'a'])
    expect(letras.vogais('PeSsOa')).toEqual(['e', 'o', 'a'])
  })

  it('filtra as consoantes de uma palavra corretamente', () => {
    expect(letras.consoantes('pessoa')).toEqual(['p', 's', 's'])
    expect(letras.consoantes('PESSOA')).toEqual(['p', 's', 's'])
    expect(letras.consoantes('PeSsOa')).toEqual(['p', 's', 's'])
  })
})
