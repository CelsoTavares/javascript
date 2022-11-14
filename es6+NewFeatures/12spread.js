let front = ['react', 'vue', 'angular']
let back = ['phyton', 'ruby', 'nodejs']


let fullstack = [...front,'jsx',...back]

console.log(fullstack)
console.log(...'celso')
console.log([...'celso'])

function makeSandwich(bread, cheese, sauce) {

    return console.log(bread, cheese, sauce)
}

const indredientes = ['white', 'black', 'blue']

makeSandwich(...indredientes)