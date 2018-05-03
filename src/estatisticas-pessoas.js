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
      //console.log(pessoas[i].pets.length);
       for (var x = 0; x < pessoas[i].pets.length; x++) {
          if (pessoas[i].pets[x].nome === nomePet) {
            console.log('OLAR');
          }
       }
    }
  }
}

const estatisticas_pessoas = {
  maiorSalario,
  possuiPetChamado
}

module.exports = estatisticas_pessoas
