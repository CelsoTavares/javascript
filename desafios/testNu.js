
// var nome = "hello world";
// var ocorrencia = (str.match(/''/g) || []).length
// console.log(ocorrencia)
// console.log(String.length(nome))
// function decodeString( numberOfRows, encodedString ){
//   numberOfRows
// }
var divida = [['Alex','Blake',2],['Blake','Alex',2],['Casey','Alex',5],['Blake','Casey',7],['Alex','Blake',4]]
// var devedor = debts[0].forEach((deve, i) => {
var alex = - divida[0][2] + divida[1][2] + divida[2][2] - divida[4][2]
var blake = + divida[0][2] - divida[1][2] - divida[3][2] + divida[4][2]
var casey = - divida[2][2] + divida[3][2]

console.log(alex)
console.log(blake)
console.log(casey)

if (alex < blake && alex < casey){
  console.log(`Alex é o menor com ${alex}`)
}
else if (blake < alex && blake < casey){
  console.log(`Blake é o menor com ${blake}`)
}
else if (casey < alex && casey < blake){
  console.log(`Casey é o menor com ${casey}`)
}
else{
  console.log(`Todos tem o mesmo valor`)
}

var devedor = [];
for(var a = 0; a < debts.length; a++){
  devedor.push(debts[a][0])
}
var credor = [];
for(var a = 0; a < debts.length; a++){
  credor.push(debts[a][1])
}
var valor = [];
for(var a = 0; a < debts.length; a++){
  valor.push(debts[a][2])
}






// console.log(devedor)
// console.log(credor)
// console.log(valor)