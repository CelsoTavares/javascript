const novoArray = [4, -5, 0, -1]
const novoArray1 = [2, -5, 3, -1]
// retorna o primeiro elemento menor que zero
const underZero = novoArray.find(x => x > 0)
// filtrando elementos identicos entre 2 arrays
const underZero1 = novoArray.filter(x => novoArray1.find(a => a === x))
console.log(underZero)

const data = [{
  name: 'Celso',
  age: 26,
  city: 'Dublin'
},
{
  name: 'Jonas',
  age: 22,
  city: 'Cologne'

}]

const jonas = data.find((person) => person.name === 'Jonas')
const jonasIndex = data.findIndex((person) => person.name === 'Jonas')
// console.log(jonas)
// console.log(jonasIndex)