let numerosApostados = [2, 5, 10, 22, 36, 43, 49, 55];
let numerosPremiados = [3, 7, 20, 22, 36, 49];
let numerosComuns = [];



for( let nApostados = 0; nApostados < numerosApostados.length; nApostados++){
for( let nPremiados = 0; nPremiados < numerosPremiados.length; nPremiados++){
if ( numerosApostados[nApostados] === numerosPremiados[nPremiados] ){
    numerosComuns.push(nPremiados);
}
}
}
console.log(numerosComuns);