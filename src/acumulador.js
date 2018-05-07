
function acumulador(array){
  if (array.length == 0) return "Array não pode ser vazio"
    let arrayzaoTop = array.reduce((acum, numeros) => {
      return acum += numeros
    })
    return arrayzaoTop
}

module.exports = acumulador
