const log = require ('./logger.js')
function acumulador(array) {
    if (array.length === 0) return "Array não pode ser vazio"
    const add = (a ,b) => a+b
    const sum = array.reduce(add)
    log(sum)
    return sum
}
module.exports = acumulador
