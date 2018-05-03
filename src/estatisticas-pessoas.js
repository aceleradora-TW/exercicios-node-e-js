const pessoas = require('./pessoas.js')

function maiorSalario(){
  let maior=0
  for (let i=0; i < pessoas.length; i++){
    if (pessoas[i].salario > maior)
    maior = pessoas[i].salario
  }
  return maior
}
module.exports ={maiorSalario}
