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

const possuiNenhumPet = () => pessoas
  .filter(pessoa => !pessoa.pets.length)
  .map(pessoa => pessoa.nome)

module.exports = {maiorSalario, possuiPetChamado, possuiNenhumPet}
