


function calculadoraAdicaoSubtracao(primeiroNumero, segundoNumero, operacao) {
    let calculo = 0;
    if (operacao == '+'){
      calculo = primeiroNumero + segundoNumero;
      return calculo;
    } else if (operacao == '-'){
        calculo = primeiroNumero - segundoNumero;
        return calculo;
    } else {
        calculo ='Operação Inválida!'
        return calculo;
    }

  }
  console.log(calculadoraAdicaoSubtracao(8, 2, '+'));