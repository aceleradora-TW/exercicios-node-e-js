const pessoas = require('./pessoas')

const comparaSalarios = (salario, outroSalario) =>
  salario > outroSalario
    ? salario
    : outroSalario

const maiorSalario = () => pessoas
  .map(pessoa => pessoa.salario)
  .reduce(comparaSalarios)

module.exports = {maiorSalario}
