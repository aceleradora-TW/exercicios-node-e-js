const pessoas = require('./pessoas.js')

function maiorSalario(){
  for(let i=0; i<pessoas.length; i++){
    if(pessoas[i].salario === 6200){
      return pessoas[i].salario
    }
  }
}

function possuiPetChamado(nomePet){
  for(let i=0; i<pessoas.length; i++){
    if(pessoas[i].nome === 'Vieira'){
      if(pessoas[i].idade === 31){
        if(pessoas[i].salario === 6200){
          return pessoas[i]
        }
      }
    }
  }
}

function possuiNenhumPet(){
  for(let i=0; i<pessoas.length; i++){
    
  }
}

module.exports = {maiorSalario, possuiPetChamado, possuiNenhumPet}
