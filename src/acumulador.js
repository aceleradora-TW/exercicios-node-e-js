const logger = require('./logger')

module.exports = (lista = []) => {
  if (!lista.length) {
    return 'Array não pode ser vazio'
  }

  const resultado = lista.reduce((total, valor) => total + valor, 0)

  logger(resultado)

  return resultado
}
