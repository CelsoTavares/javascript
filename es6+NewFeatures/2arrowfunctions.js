
const namePessoa = ['Nanny', 'Claudia', 'Ayse']

const love = namePessoa.map((pessoa) => `Eu amo ${pessoa}`)
console.log(love)

const loveChain = namePessoa
                    .filter((name) => name === 'Nanny')
                    .map((name) => `Só tem ${name}`)

                    console.log(loveChain)

// uso do this em arrow function (=>), pega o contexto geral da funcao superior ou o window
// ja o this com function pega a funcao em si
