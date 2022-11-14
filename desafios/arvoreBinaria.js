// Construtor de árvore
// Faça com que a função TreeConstructor( strArr ) pegue o array de strings armazenado em strArr , que conterá pares de inteiros no seguinte formato: (i1,i2) , onde i1 representa um nó filho em uma árvore e o segundo inteiro i2 significa que ele é o pai de i1 . Por exemplo: se strArr é ["(1,2)", "(2,4)", "(7,2)"], então isso forma a seguinte árvore:



// a qual você pode ver forma uma árvore binária adequada. Seu programa deve, neste caso, retornar a string true porque uma árvore binária válida pode ser formada. Se uma árvore binária adequada não puder ser formada com os pares de inteiros, retorne a stringfalso . Todos os inteiros dentro da árvore serão únicos, o que significa que só pode haver um nó na árvore com o valor inteiro fornecido.
// Exemplos
// Entrada: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Saída: verdadeiro
// Entrada: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Saída: falso
let valor =  ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Primeiro exemplo de solucao
// function TreeConstructor(strArr) { 
//   let child = {};
//   let parent = {};
//   for (let i = 0; i < strArr.length; i++){
//       let str = strArr[i].split('');
//       str.pop();
//       str.shift();
//       let pair = str.join('').replace(", ", ",").split(',');
//       child[pair[0]] = (child[pair[0]] || 0) + 1;
//       if (child[pair[0]] > 1) return false;
//       parent[pair[1]] = (parent[pair[1]] || 0) + 1;
//       if (parent[pair[1]] > 2) return false;
 
//   }
//   return true; 
// }
// console.log(TreeConstructor(valor));

// Segundo exemplo de solucao
function TreeConstructor(strArr) {
  const treeElements = strArr
      .map(i => i
          .replace(/[\(\)]/, '')
          .split(',')
          .map(i => parseInt(i)) 
      );
      const childNodes = treeElements.map(i => i[0]);
      const parentNodes = treeElements.map(i => i[1]);

  // We shouldn't have 3 same parent and 2 same children
  return ! (('_' + parentNodes.sort().join('_') + '_').match(/(_\d+)\1\1_/)
      || ('_' + childNodes.sort().join('_') + '_').match(/(_\d+)\1_/));
}
 
console.log(TreeConstructor(valor));
