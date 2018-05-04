const letras = require('../src/letras.js')

describe('Letras', () => {
  it('letras.vogais deve retornar as vogais da palavra', () => {
    expect(letras.vogais('pessoa')).toEqual(['e', 'o', 'a'])
  })

  it('letras.consoantes deve retornar as consoantes da palavra', () => {
    expect(letras.consoantes('pessoa')).toEqual(['p', 's', 's'])
  })

  it('letras.vogais deve retornar vogais com acento', () => {
    expect(letras.vogais('áéíóúãõâêôüà')).toEqual(['á','é','í','ó','ú','ã','õ','â','ê','ô','ü','à'])
  })

//áéí
})
