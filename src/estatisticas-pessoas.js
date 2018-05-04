let listaPessoas = require('./pessoas')
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

const possuiNenhumPet = () => {
  const listaFiltrada = listaPessoas.filter(pessoa => pessoa.pets.length == 0)
  return listaFiltrada.map(pessoa => pessoa.nome)

}

console.log(possuiNenhumPet())


module.exports = {maiorSalario,possuiPetChamado,possuiNenhumPet}
