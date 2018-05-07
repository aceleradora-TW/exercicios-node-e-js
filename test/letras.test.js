const letras = require('../src/letras.js')

describe('Letras', ()=>{
  it ('Deve retornar vogais', ()=>{
    const vogais = letras.vogais('batatinha')
    expect(vogais).toEqual(['a','a','i','a'])
  })
  it ('Deve retornar consoantes', ()=>{
    const consoantes = letras.consoantes('casinha')
    expect(consoantes).toEqual(['c','s','n','h'])
  })
})
