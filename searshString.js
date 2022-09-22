let str = "Please locate where 'locate' occurs!";
str.search("locate"); // só pode receber 1 parametro
str.indexOf("locate"); // começando do inicio retorna o indexdo primeiro caractere encontrada
str.lastIndexOf("locate", 15); // começa do final // ambos aceitam 2 parametros

let text1 = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); // pesquina no texto e retonar 
// Se uma expressão regular não incluir o modificador g (para realizar uma pesquisa global ), o método match() retornará apenas a primeira correspondência na string.
let text2 = "Hello world, welcome to the universe.";
text.startsWith("Hello"); // se inicia com a palavra, true
text.endsWith("Doe"); // se terminar com a plavra, true
let text = "Hello world, welcome to the universe.";
text.includes("world", 12); // retorna true ou false, parametro de pesquisa e posição