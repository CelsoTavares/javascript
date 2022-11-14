



let m = new Map()

m.set('William')
m.set('Carlos')
m.set('Anderson')
console.log(m)
m.size
console.log(m.values())
m.delete()
m.has()

// WeakMap so aceita objetos
let obj = {
  name: 'John',
  age: 34
}
let Wm = new WeakMap()

Wm.set(obj, 'Info do John')