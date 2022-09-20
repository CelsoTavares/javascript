

function comparaTamanhoSapatos(Isabela, Luisa ){
Isabela = 30;
Luisa = 38;
if( Isabela > Luisa){
    return 'Isabela calça mais';
}else if (Luisa > Isabela){
    return 'Luisa calça mais';
}else {
    return 'Isabela e Luisa calçam o mesmo tamanho de sapato';
}

}
console.log(comparaTamanhoSapatos());