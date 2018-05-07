const pessoas = require ('./pessoas.js')

function maiorSalario(){
  const maiorSalario = pessoas.reduce((maiorSal, pessoa) => {
    if(pessoa.salario > maiorSal)
      maiorSal = pessoa.salario
      return maiorSal
  }, 0)
  return maiorSalario
}


function possuiPetChamado(nomePet){
  return pessoas.find(pessoa => pessoa.pets.some(item => item.nome === nomePet ))
}


function possuiNenhumPet(){
  return pessoas.filter(pessoa => pessoa.pets.length === 0).map(pessoa => pessoa.nome);
}

const estatisticas_pessoas = {
  maiorSalario,
  possuiPetChamado,
  possuiNenhumPet
}

module.exports = estatisticas_pessoas
