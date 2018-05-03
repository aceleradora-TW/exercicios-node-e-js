/**
 * Não é permitido utilizar for para resolver esse exercício
 */

const acumulador = require('../src/acumulador.js')

describe('Acumulador', () => {
    it('deve retornar mensagem de erro se o array é vazio', () => {
        expect(acumulador([])).toEqual("Array não pode ser vazio")
    })

    it('deve acumular todos os numeros num array', () => {
        expect(acumulador([1,2,3,4,5])).toEqual(15)
    })
})
