

function genNames1() {
  console.log('Celso')
  console.log('Anderson')
  console.log('Carlos')

}
function* genNames2() {
  console.log('Primeiro nome')
  yield 'Celso'
 
  console.log('Segundo nome')
  yield 'Anderson'
  
  console.log('Terceiro nome')
  yield'Carlos'

}
const names = genNames2()

console.log(names.next().value)
console.log(names.next().done)
console.log(names.next())
console.log(names.next())
console.log(names.next())