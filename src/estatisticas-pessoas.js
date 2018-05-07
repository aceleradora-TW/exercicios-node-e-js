const pessoas = require ('./pessoas.js')

function maiorSalario() {
  let maior = 0;
  pessoas.forEach(pessoa => {
    if (maior < pessoa.salario) maior = pessoa.salario
  })
  return maior
}

function possuiPetChamado(nomePet) {
  function nomeDoPet(pessoa) {
    if (pessoa.pets.some((pet) => { return pet.nome === nomePet })) return pessoa
  }
  return pessoas.find(nomeDoPet)
}

function possuiNenhumPet() {
  return pessoas.filter((pessoa => pessoa.pets.length === 0)).map(pessoa => pessoa.nome);
}

const estatisticas_pessoas = {
  maiorSalario,
  possuiPetChamado,
  possuiNenhumPet
}

module.exports = estatisticas_pessoas
