const pessoas = require('./pessoas')

const comparaSalarios = (salario, outroSalario) =>
  salario > outroSalario
    ? salario
    : outroSalario

const maiorSalario = () => pessoas
  .map(pessoa => pessoa.salario)
  .reduce(comparaSalarios)

const possuiPetChamado = (nomeDoPet) => pessoas
  .find(pessoa => pessoa
    .pets
    .find(pet => pet.nome === nomeDoPet))

module.exports = {maiorSalario, possuiPetChamado}
