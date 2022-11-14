
var animal; 
//colocando a var fora, consigo pegar o valor no lado de fora da funcao

function getAnimal() {
  animal = cat
  console.log(animal)
}
getAnimal() 
console.log(animal)


// let fica dentro do escopo (chaves)
// const  nao pode ser alterado, mas os valores dela se for object (sim)
