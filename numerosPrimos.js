let priminhos = [];
function numerosPrimos(numero) {
                    
    for (let n = 2; n <= numero; n++) {
    let primo = true;
    
        for (let divisor = 2; divisor < n; divisor++){
            if(n % divisor === 0){
                primo = false;
                
                break;
            }
        }

            if (primo) 
            priminhos.push(n);
            
    }    
    
}
numerosPrimos(17); 

console.log(priminhos);