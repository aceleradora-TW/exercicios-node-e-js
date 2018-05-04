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

  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].pets.length >0) {

       for (var x = 0; x < pessoas[i].pets.length; x++) {
          if (pessoas[i].pets[x].nome === nomePet) {
            return pessoas[i]
          }
       }
    }
  }
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
