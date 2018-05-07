const letras = require('../src/letras.js')

describe('Letras', () => {
  it('letras.vogais deve retornar as vogais', () => {
     expect(letras.vogais('pessoa')).toEqual(['e','o','a'])
   })

  it('letras.consoantes deve retornar as consoantes', () => {
    expect(letras.consoantes('pessoa')).toEqual(['p','s','s'])
  })

  it('letras.vogais deve retornar as vogais com acento', () => {
    expect(letras.vogais('órfão')).toEqual(['ó','ã','o'])
  })
})
