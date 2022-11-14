// Faça com que a função MinWindowSubstring( strArr ) pegue o array de strings armazenado em strArr , que conterá apenas duas strings, sendo o primeiro parâmetro a string N e o segundo parâmetro sendo uma string K de alguns caracteres, e seu objetivo é determinar o menor substring de N que contém todos os caracteres em K. Por exemplo: se strArr é ["aaabaaddae", "aed"] então a menor substring de N que contém os caracteres a, e e d é "dae" localizada no final da corda. Portanto, para este exemplo, seu programa deve retornar a string dae .

// Outro exemplo: if strArré ["aabdccdbcacd", "aad"] então a menor substring de N que contém todos os caracteres em K é "aabd" que está localizada no início da string. Ambos os parâmetros serão strings com comprimento de 1 a 50 caracteres e todos os caracteres de K existirão em algum lugar na string N. Ambas as strings conterão apenas caracteres alfabéticos minúsculos.
// Exemplos
// Entrada: ["ahffaksfajeeubsne", "jefaa"]
// Saída: aksfaje
// Entrada: ["aaffhkksemckelloe", "fhea"]
// Saída: affhkkse



function MinWindowSubstring(arr) {
  var str1 = arr[0], str2 = arr[1], min = Infinity, output;
  
  for (var i = 0; i < str1.length; i++) {
    for (var j = i+1; j <= str1.length; j++) {
      var slice = str1.slice(i, j);   
      if (slice.length < min && scramble(slice, str2)) {
        output = slice;
        min = slice.length;
      }
    }
  }
  
  return output;
}  

function scramble(str1, str2) {
  function obj(str) {
    return str. split("").reduce(function(prev, curr) {
      prev[curr] ? prev[curr]++ : prev[curr] = 1;
      return prev;
    }, {});
  }
  
  var charCount1 = obj(str1), charCount2 = obj(str2);
  
  return Object.keys(charCount2).reduce(function(prev, curr) {
    return Math.min(prev, charCount1[curr]/charCount2[curr] || 0);
  }, Infinity) >= 1;
}


// keep this function call here 
MinWindowSubstring(readline());