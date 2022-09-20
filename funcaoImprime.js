/*function saudacao() {
let diga = 'Bem-vindo programador Celso.'
return diga;


}
console.log(saudacao());

function imprimeSaudacao(nome) {
    const saudacao = 'Olá, ' + nome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Gisele'));*/
  
  function imprimeSaudacao(nome, sobrenome, idade) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
  
    return saudacao + ' ' + exibeIdade;
  }
  
  console.log(imprimeSaudacao('Alberto', 'Cavalcanti', 85));
  console.log(imprimeSaudacao('Cleyton', 'Oliveira', 32));
  console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));