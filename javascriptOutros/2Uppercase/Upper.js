{

    var nome = window.prompt("Qual é o seu nome?");
    document.writeln(`Olá, ${nome}. Seu nome tem ${nome.length} letras.<br/>`); 
    // conta e informa em números a quantidade de caracteres
    document.write(`Seu nome escrito com letras maiúsculas é assim ${nome.toUpperCase()}.<br/>`); 
    // letras maiúsculas
    document.write(`Seu nome escrito com letras minúsculas é assim ${nome.toLocaleLowerCase()}.<br/>`); 
    // letras minúsculas


}
