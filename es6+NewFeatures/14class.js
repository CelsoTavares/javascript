// class em ES6
// class Animal {
//   constructor(kind, sound) {
//   this.kind = kind
//   this.sound = sound
//   }
//   hello() {
//     console.log(`${this.sound} I'm a ${this.kind}`)
//   }

//   static info() {
//     console.log(`This is a class to create animail!`)
//   }
//   get name() {
//     console.log('Mt name is Jake!')
//   }
//   set nickname(nick) {
//     this.nick = nick
//   }
// }

// const dog = new Animal('dog','auau')
// const cat = new Animal('cat','meow')
// dog.nickname = 'J'

// dog.nick
// dog.hello()
// cat.hello()
// Animal.info()



  class pessoa {
    constructor(nome, pai, mae){
      this.nome = nome
      this.pai = pai
      this.mae = mae

    }
    primeiraPessoa() {
      console.log(`Meu nome é ${this.nome} meu pai é ${this.pai} e minha mãe é ${this.mae}`)
    }
  }
  const Carlos = new pessoa('Carlos', 'João', 'Elena')
  Carlos.primeiraPessoa()

  class contador {
    constructor(numeroItens) {
      this.numeroItens = 10
    
    }
    incrementar() {
      console.log(`${this.numeroItens + 1}  `)
    }
    zerar() {
      console.log(`${this.numeroItens = 0} `)
    }
    valor() {
      console.log(`Valor de: ${this.numeroItens} `)
    }
  }
 new contador().incrementar()
 new contador().zerar()
 new contador().valor()

  // const Carlos = new pessoa('Carlos', 'João', 'Elena')
  // Carlos.primeiraPessoa()
