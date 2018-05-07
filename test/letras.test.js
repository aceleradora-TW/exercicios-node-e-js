const letras = require('../src/letras.js')

describe('O módulo de letras', () => {
  
  it('exibe vogais', () => {
    const vogais = letras.vogais('Luiz')

    expect (vogais).toEqual(['u', 'i'])
  })


    it('exibe consoantes', () => {
      const consoantes = letras.consoantes('Luiz')

      expect (consoantes).toEqual(['l', 'z'])
    })
})
