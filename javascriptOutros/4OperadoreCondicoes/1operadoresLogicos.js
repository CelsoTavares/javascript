var idade = 16

if (idade >= 18 && idade < 65) {
console.log('Voto obrigatório')

} else if (idade == 16 || idade == 17 || idade >= 65) {
console.log('Voto opcional')

} else if (idade < 16) {
console.log('Você não pode votar')

} else {
console.log('Error, digite uma idade valida')
}
