

function Ajax() {
  fetch(url)
  .then(data => data.json())
  .then(data => data.next(data))
}

function* AjaxGen() {
  console,log('Busncado posts...')
  const post = yield ajax('https://')

  console.log('Buscando dados github....')
  const gitHub = yield ajax('https://')

}

const dados = ajaxGen()
dados.next()

// function calc(a, b) {
//       return a ** b
// }

// let a = 3
// let b = 5



// console.log(calc(3, 5))