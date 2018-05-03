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

  it('filtra vogais de palavras com acento corretamente', () => {
    expect(letras.vogais('avião')).toEqual(['a', 'i', 'ã', 'o'])
    expect(letras.vogais('saúde')).toEqual(['a', 'ú', 'e'])
    expect(letras.vogais('ágil')).toEqual(['á', 'i'])
    expect(letras.vogais('parâmetro')).toEqual(['a', 'â', 'e', 'o'])
    expect(letras.vogais('pelé')).toEqual(['e', 'é'])
    expect(letras.vogais('perímetro')).toEqual(['e', 'í', 'e', 'o'])
    expect(letras.vogais('óstia')).toEqual(['ó', 'i', 'a'])
    expect(letras.vogais('peões')).toEqual(['e', 'õ', 'e'])
    expect(letras.vogais('antônimo')).toEqual(['a', 'ô', 'i', 'o'])
  })

  it('filtra consoantes de palavras com acento corretamente', () => {
    expect(letras.consoantes('avião')).toEqual(['v'])
    expect(letras.consoantes('saúde')).toEqual(['s', 'd'])
    expect(letras.consoantes('ágil')).toEqual(['g', 'l'])
    expect(letras.consoantes('parâmetro')).toEqual(['p', 'r', 'm', 't', 'r'])
    expect(letras.consoantes('pelé')).toEqual(['p', 'l'])
    expect(letras.consoantes('perímetro')).toEqual(['p', 'r', 'm', 't', 'r'])
    expect(letras.consoantes('óstia')).toEqual(['s', 't'])
    expect(letras.consoantes('peões')).toEqual(['p', 's'])
    expect(letras.consoantes('antônimo')).toEqual(['n', 't', 'n', 'm'])
  })
})
