// Módulos
// Os módulos JavaScript permitem que você divida seu código em arquivos separados.

// Isso facilita a manutenção da base de código.

// Os módulos ES dependem das instruções importe export.

// Exportar
// Você pode exportar uma função ou variável de qualquer arquivo.

// Vamos criar um arquivo chamado person.js, e preenchê-lo com as coisas que queremos exportar.

// Existem dois tipos de exportação: Nomeado e Padrão.

// Exportações nomeadas
// Você pode criar exportações nomeadas de duas maneiras. In-line individualmente, ou todos de uma vez na parte inferior.

// Em linha individualmente:
// person.js

export const name = "Jesse"
export const age = 40

// Tudo de uma vez na parte inferior:
// person.js

const name = "Jesse"
const age = 40

export { name, age }

// Exportações padrão
// Vamos criar outro arquivo, chamado message.js, e usá-lo para demonstrar a exportação padrão.

// Você só pode ter uma exportação padrão em um arquivo.
// Exemplo
// message.js

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};
console.log(message)
export default message;
// Importar
// Você pode importar módulos para um arquivo de duas maneiras, com base no nome de exportação ou exportação padrão.

// As exportações nomeadas devem ser desestruturadas usando chaves. As exportações padrão não.

// Importar de exportações nomeadas
// Importe exportações nomeadas do arquivo person.js:

import { name, age } from "./person.js.js";

// Importar de exportações padrão
// Importe uma exportação padrão do arquivo message.js:

import message from "./message.js.js";