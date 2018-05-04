// for (var i = 0; i < estatisticas; i++) {
//   val = estatisticas[i]
//   console.log(val.path)
// }
// for (var i = 0; i < listaPessoas.length; i++) {
//   if (listaPessoas[i].salario > campoSalario) {
//     for (var i = 0; i < pets.length; i++) {
//       campoNome = listaPessoas[i].nome
//       campoIdade = listaPessoas[i].idade
//       campoSalario = listaPessoas[i].salario
//     }
//   }
// }
// console.log(campoNome,campoIdade,campoSalario);

let listaPessoas = require('./pessoas')
let campoNome = ""
let campoIdade = ""
let campoSalario = 0

function maiorSalario(){
  for (var i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].salario > campoSalario) {
      campoSalario = listaPessoas[i].salario
    }
  }
  return campoSalario
}

const possuiPetChamado = (nomeDoPet) => {
  return listaPessoas.find(pessoa => pessoa.pets.some(pet => pet.nome === nomeDoPet))
}



module.exports = {maiorSalario,possuiPetChamado}
