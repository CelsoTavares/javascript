
     
function fatorial(n){

  var index = 1
  for( n; n >= 1; n-- ){
    index = index * n
   
   
  }
  return index
} 
console.log(fatorial(10))