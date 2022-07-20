let chances = [1, 10, 3];
function tripleTheChances(chances) {
let soma = 0;
for (let index = 0; index < chances.length; index = index +1){
    soma = soma + chances[index];
}
let mult = soma * 3;
return mult;
}
console.log(tripleTheChances(chances));