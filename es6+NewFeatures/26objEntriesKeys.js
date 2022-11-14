
const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}

const animalsKeys = Object.keys(animals) // agora posso usar metodos de array
const animalsMap = new Map(Object.entries(animals)) // iterator
const animalsValue = Object.values(animals) // return valor

console.log(animalsValue.reduce((a, b) => a + b))

console.log(animalsKeys[0])
console.log(animalsMap)
console.log(animalsMap.has('llama'))
console.log(animalsMap.size)
console.log(animalsMap.get('alpaca'))

