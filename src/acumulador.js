const logger = require('./logger.js')
function verificaVazio(array){
 if (array.length == 0){
   return "Array não pode ser vazio"
 }
}

function acumulaNum(array){
 let soma = 0
 array.forEach(function (valor){
   soma += valor
 })
 logger(soma)
 return soma
}
module.exports = {verificaVazio, acumulaNum}
