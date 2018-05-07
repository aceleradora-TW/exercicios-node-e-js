const letra = require('../src/letras.js')

describe('Letras', () => {

  it('Retorna as vogais da palavra', () => {
    const resultado = letra.vogais('Diovane')

    expect(resultado).toEqual('i', 'o', 'a', 'e')
  })
}
