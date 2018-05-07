const pessoas = require ('./pessoas.js')

function maiorSalario() {
  let maior = 0;
  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].salario > maior) {
      maior = pessoas[i].salario
    }
  }
  return maior
}


function possuiPetChamado(nomePet){
  let pessoacomPet
  pessoas.forEach((pessoa) => {
    if (pessoa.pets.some((pet) => { return pet.nome === nomePet })) {
      pessoacomPet = pessoa
    }
  })
  return pessoacomPet
}

function possuiNenhumPet(){
  function semPet(pessoa) {
    return pessoa.pets.length === 0;
  }

  function nomePessoa(pessoa) {
    return pessoa.nome
  }
  return pessoas.filter(semPet).map(nomePessoa);
}

const estatisticas_pessoas = {
  maiorSalario,
  possuiPetChamado,
  possuiNenhumPet
}

module.exports = estatisticas_pessoas
