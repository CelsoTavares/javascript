palindromo('ovo');

function palindromo(palavra) {
let palavraInvertida = '';
let ehPalindromo = '';
for( let p = palavra.length - 1;p >= 0; p-- ){
palavraInvertida = palavraInvertida + palavra[p];
}  

ehPalindromo = (palavra === palavraInvertida) ? 'Sim' : 'Não';

if(ehPalindromo === 'Sim'){
console.log('Sim, sou um políndromo!');

} else if (ehPalindromo == 'Não'){
    console.log('Infelizmente não sou um políndromo!');
}

}