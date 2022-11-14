

let obj = {
  name: 'William',
  age: 26
}

let ws = new WeakSet([obj1, obj2])

ws.add()
ws.delete()
// nao pode fazer for of, tb nao values, nao é itarator