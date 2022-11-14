// Validação de nome de usuário Codeland
// Faça com que a função CodelandUsernameValidation( str ) pegue o parâmetro str que está sendo passado e determine se a string é um nome de usuário válido de acordo com as seguintes regras:

// 1. O nome de usuário tem entre 4 e 25 caracteres.
// 2. Deve começar com uma letra.
// 3. Só pode conter letras, números e o caractere sublinhado.
// 4. Não pode terminar com um caractere de sublinhado.

// Se o nome de usuário for válido, seu programa deve retornar a string true , caso contrário, retornar a string false .
// Exemplos
// Entrada: "aa_"
// Saída: false
// Entrada: "u__hello_world123"
// Saída: true
// Tag
// procurandomanipulação de stringsprocurandoexpressão regularCodelandgratuitamente

// const pattern1 = "[a-zA-Z]"
// const primeiraLetra = str.charAt(0).match(pattern1)
// const end = !str.endsWith('_')


const str = 'rwertyuiopasdfghlzxcvb'
// regex aceita no inicio somente letras de A a Z em toda variavel A a Z 0 a 9 e nao aceita _ no final
const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
const numberCharacters = str.length >= 4 && str.length <=25
const checkCharacters = regex.test(str)

if(numberCharacters && 
  checkCharacters){
    console.log('sim')
  }else{
    console.log('false')
  }




