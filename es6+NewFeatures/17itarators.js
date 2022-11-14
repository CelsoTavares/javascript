


var txt = 'Ireland my house'
var it = txt[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

for(letter of txt) {    // of voltar cada valor de txt e in volta cada indice de txt
  console.log([letter])
  
  if(letter === 'y') break // depois que encontro o valor 'a' parou 

}