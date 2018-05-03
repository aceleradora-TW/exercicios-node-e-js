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

    describe('logger', () => {
        /** 
        * É obrigatório usar o logger.js nesta parte do exercício. 
        */

        global.console = {
            log: jest.fn(),
            warn: jest.fn()
        }

        it('tambem deve colocar a resposta no log após acumular', () => {
            acumulador([1])
            expect(global.console.log).toBeCalledWith(1)
        })

        it('deve colocar a mensagem de erro como um warn quando o acumulador falha', () => {
            acumulador([])
            expect(global.console.warn).toBeCalledWith('Array não pode ser vazio')
        })
    })
})
