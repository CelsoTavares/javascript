
// proxy recebe 2 parametro e tem varios metodos

// var p = new Proxy(target, handler)

let obj = {
  name: 'William',
  age: 26
}

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log('Alguém está pedindo o nome')
    return target[name]
  },
  set(target, name, value) {
    console.log('Alguém está pedindo o nome')
    target[name] = value.toUpperCase()
  }
})
proxy.name = 'Jonas'
console.log(proxy.name = 'Jonas')