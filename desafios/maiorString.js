// Desafio maior string com letras, filtrar caracteres e só retorna a maior palavra da frase

let frase = ['CAminhao' ,'é', 'um', 'carro', 'legal']
let numeros= [11, 22, 9, 01, 2, 1, 3]
function LongestWord(sen) { 

 
 var arr = sen.match(/[a-z0-9]+/gi);
 var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return sorted[0];
         
}
   
console.log(frase.toString().toLowerCase())



// console.log(LongestWord(frase))