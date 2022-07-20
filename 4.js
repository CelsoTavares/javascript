function trocandoAsLetras(frase, letra) {
     frase = 'Vou estudar na Trybe!';
     letra = /o/gim;
    let texto = frase.replace(letra, '*');


 
return texto;


}

console.log(trocandoAsLetras());