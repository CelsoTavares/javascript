let text = "5";
let padded1 = text.padEnd(4,"0"); // inseri 4 elemento 0 no final
let padded2 = text.padStart(4,"0"); // inseri 4 elemento 0 no inicio

let text1 = "      Hello World!      ";
let text2 = text1.trim(); // remove espaços em branco em ambos os lados
// trimStart() do inicio
// trimEnd() do final
text = "Hello" + " " + "World!"; // as duas linhas fazem a mesma coisa
text = "Hello".concat(" ", "World!"); // junta duas ou mais strings

let texto1 = "Hello World!";       // String
let texto2 = texto2.toLowerCase(); // transforma em letras minusculas
let texto3 = texto3.toUpperCase(); // transforma em letras minusculas

let text4 = "Please visit Microsoft and Microsoft!";
let newText = text4.replace(/Microsoft/g, "W3Schools"); // subustitui com o comando /g = global.

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6); // parametros de inicio e fim 

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length; // comprimento da string

let text5 = "HELLO WORLD";
let char1 = text5.charAt(0); // pega o caractere pela posição.

let text6 = "HELLO WORLD";
let char2 = text6.charCodeAt(0); // O método retorna um código UTF-16 (um inteiro entre 0 e 65535).

// Uma string pode ser convertida em um array com o split()método:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
// Se o separador for omitido, o array retornado conterá a string inteira no índice [0].
// Se o separador for "", o array retornado será um array de caracteres únicos: