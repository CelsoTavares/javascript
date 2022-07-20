
function vezesLetraAparece(frase, letra){

     frase = 'The greatest glory in living lies not in never falling, but in rising every time we fall';
     letra = (frase. match(/e/gim) || []).length;
     return letra;
}

console.log(vezesLetraAparece());