
// bseado em iterator
let mySet = new Set(['Willian','Jonas','Celso']);

// so add o elemento se ele nao estiver contido
mySet.add('Carlos')
mySet.add('Carlos')
console.log(mySet)

mySet.delete('Jonas')
// console.log(mySet)

// console.log(mySet.size) // size verifica o tamanho 
// console.log(mySet.has('Celso')) // verifica se o elemento esta contido e return false ou true

let it = mySet.values();
console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
