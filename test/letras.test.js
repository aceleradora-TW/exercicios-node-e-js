const letras = require('../src/letras.js')

describe('O módulo de letras', () => {

  it('exibe vogais', () => {
    const vogais = letras.vogais('Laura')

    expect (vogais).toEqual(['a', 'u', 'a'])
  })


    it('exibe consoantes', () => {
      const consoantes = letras.consoantes('esquilo')

      expect (consoantes).toEqual(['s', 'q', 'l'])
    })

    it('exibe vogais com acento', () => {
      const acento = letras.vogais('Láúrá')

      expect(acento).toEqual(['á', 'ú', 'á'])
    })


})
