const letras = require('../src/letras.js')


describe('letras', () => {

  it('letras.vogais deve retornar as vogais', () => {
    expect(letras.vogais('pessoa')).toEqual(['e','o','a'])
})

  it('letras.consoantes deve retornar as vogais', () => {
    expect(letras.consoantes('pessoa')).toEqual(['p','s','s'])
})

it('letras.vogal deve retornar as vogaiscom acentos', () => {
   expect(letras.vogais('áéíóúãõâêôüà')).toEqual(['á','é','í','ó','ú','ã','õ','â','ê','ô','ü','à'])
 })

})
