//Uma maneira de percorrer um array é usar um forloop:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text1 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text1 += "<li>" + fruits1[i] + "</li>";
}
text += "</ul>";


// usando forEach
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let text2 = "<ul>";
fruits2.forEach(myFunction);
text2 += "</ul>";

function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}

fruits3.push("Lemon"); // adiciona a palavra no array na ultima posição
// Essas duas instruções diferentes criam um novo array vazio chamado points:
const points1 = new Array(); // podemos criar também definindo elementos dentros do array
const points2 = [];

// metodos
// O join()método também une todos os elementos do array em uma string.
// Ele se comporta como toString(), mas além disso você pode especificar o separador:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//Resultado
Banana * Orange * Apple * Mango