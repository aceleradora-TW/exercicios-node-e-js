const pessoas = require('./pessoas.js')

maiorSalario = () => {
 let maiorSalario = pessoas[0].salario
 pessoas.forEach(function(item){
   if (item.salario > maiorSalario) maiorSalario = item.salario
   })
 return maiorSalario
}

possuiPetChamado = (nomePet) => {
  let aux
  pessoas.find(pessoa => {
    pessoa.pets.forEach(item => {
      if (item.nome === nomePet) aux = pessoa
    })
  })
  return aux
}

possuiNenhumPet = () => {
  const listaFiltrada = pessoas.filter(item => {
    if (item.pets.length == 0) return item
  }).map(item => {
    return item.nome
  })
  return listaFiltrada
}

module.exports = {maiorSalario, possuiPetChamado, possuiNenhumPet}
