
let arrayNumeros = [1 , 2, 3];
function mediaDosNumeros(arrayNumeros) {
 
    let soma = 0;
    for(let numero of arrayNumeros){ // == let numero = 0; numero < arrayNumeros.length; numero++) 
       soma += numero;               // soma = soma + numero
  
      }
        
    // let media = soma/arrayNumeros.length; // media = soma / 3
    return soma;
    
    
    }
    
    console.log(mediaDosNumeros(arrayNumeros));