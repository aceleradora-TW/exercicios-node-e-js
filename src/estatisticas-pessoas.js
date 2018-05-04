const pessoas = require('./pessoas.js');

function maiorSalario() {
    const maiorSalario = pessoas.reduce((maiorSal, pessoa) => {
        if(maiorSal < pessoa.salario)
          maiorSal = pessoa.salario
          return maiorSal
    },0)
    return maiorSalario
}

function possuiPetChamado(nomePet){
  return pessoas.find(pessoa => pessoa.pets.some(petAtual => petAtual.nome === nomePet))
}

function possuiNenhumPet(){
  const pessoasSemPets = pessoas.filter(pessoa => pessoa.pets.length == 0)
  return pessoasSemPets.map(pessoa => pessoa.nome)
}

module.exports = {maiorSalario, possuiPetChamado, possuiNenhumPet}
