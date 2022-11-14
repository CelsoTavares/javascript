var agora = new Date
var hora = agora.getHours()
hora = 30
console.log(hora)

if (hora >= 1 && hora <= 5)  {
console.log('Boa madrugada')

} else if (hora >= 6 && hora <= 11) {
console.log('Bom dia') 

} else if (hora >= 12 && hora <= 17) {
console.log('Boa tarde')

} else if (hora >= 18 && hora <= 23) {
console.log('Boa noite')

}else {
console.log('Hora inválida')
}

