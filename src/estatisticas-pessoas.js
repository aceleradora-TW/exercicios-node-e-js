const pessoas = require('./pessoas.js')

function maiorSalario(){
  let maior=0
  for (let i=0; i < pessoas.length; i++){
    if (pessoas[i].salario > maior)
      maior = pessoas[i].salario
  }
  return maior
}

function possuiPetChamado(nomePet){
     return pessoas.filter((pessoa)=> {
      return pessoa.pets.some((pet)=>{
        return pet.nome===nomePet
       })
     })[0]
}
console.log (possuiPetChamado('Vieirinha'))












module.exports ={maiorSalario, possuiPetChamado}
