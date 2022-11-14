

palindromo('Celso');

function palindromo(palavra) {
let palavraInvertida = '';

for( let p = palavra.length - 1;p >= 0; p-- ){
palavraInvertida = palavraInvertida + palavra[p];
}  

if(palavra === palavraInvertida){
    console.log('Sim, sou um políndromo!');

} else if (palavra !== palavraInvertida){
    console.log('Infelizmente não sou um políndromo!');
}

}

