const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "R$ 300",
    "Meus dados",
    "Contas a pagar",
];
// filter quando retorna true inclui o número
const precosFiltro = precos.filter(preco => preco.includes("R$"));
// map retorna todo array e imnclui o comando
const precosNumeros = precosFiltro.map((preco) => +preco.replace("R$ ",""));
// reduce retorna o primeiro valor
const total = precosNumeros.reduce((acc, item) => acc + item); // posso definir o vamor inicial


console.log(precosFiltro);
console.log(precosNumeros);
console.log(total);
