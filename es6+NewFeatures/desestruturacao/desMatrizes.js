// Destruindo Matrizes
// Aqui está a maneira antiga de atribuir itens de matriz a uma variável:

// Antes da:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// Aqui está a nova maneira de atribuir itens de matriz a uma variável:

// Com desestruturação:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

// Se quisermos apenas o carro e o suv, podemos simplesmente deixar o caminhão de fora, mas manter a vírgula:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

// A desestruturação é útil quando uma função retorna uma matriz:

// Exemplo
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);