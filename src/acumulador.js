function acumulador(array) {
  if (array.length === 0){
    return "Array não pode ser vazio"
  }
  let somatorio = array.reduce(function(acumulador,valorAtual){
    return acumulador+valorAtual
  })
  return somatorio
}



module.exports = acumulador
