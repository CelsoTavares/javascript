


     // let frase = 'O carro velho';
     // let letra = 'r';
     let letras = [];
     // let resultado = (frase.match(letra)  || []).length;
     
     function verifica(frase, letra){
        
          for (var i  in frase) {
               if (letra == frase[i]) {
                    letras.push(frase[i]);
               }
               
          }
          
     }
     verifica('O carro velho', 'O'); // pega maiúscula ou minúscula
     let quantidade = letras.length;
     console.log(quantidade);