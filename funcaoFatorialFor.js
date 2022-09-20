function fatorial(n) {
var resultado = n
for(var i = 1; i < n; i++) {
   resultado = resultado * i
}
return resultado

}

console.log(fatorial(5))