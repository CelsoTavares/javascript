// Comparador de colchetes
// Faça com que a função BracketMatcher( str ) pegue o parâmetro str que está sendo passado e retorne 1 se os colchetes corresponderem corretamente e cada um for contabilizado. Caso contrário, retorne 0 . Por exemplo: se str for "(hello (world))", então a saída deve ser 1 , mas se str for "((hello (world))" a saída deve ser 0 porque os colchetes não correspondem corretamente. Apenas "(" e ")" serão usados ​​como colchetes. Se str não contiver colchetes, retorne 1 .
// Exemplos
// Entrada: "(codificador)(byte))"
// Saída: 0
// Entrada: "(c(oder)) b(yte)"
// Saída: 1


var capture = []

function test(){
var palavra = "(c(oder)) b(yte)"

for(letter of palavra){
  // console.log(letter)
  if(letter === '(' || letter === ')')
   capture.push(1)
  }
return capture.length % 2 === 0 ? 1 : 0

}
console.log(test())



