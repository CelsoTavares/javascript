
// 

// fetch ('https://pokeapi.co/api/v2/pokemon/')
// .then((response) => response.json())
//   .then((r) =>{
//    for(let i = 0; i < 20; i++){
     
//     arr.push(r.results[i]) 
//     let transform = [{name, url}] = arr
//     document.querySelector('#ul').innerHTML = `<li>${url}</li>`
//   }
//  .catch(err => console.log('Deu erro'))
// })

// console.log(arr)
let arr = []
async function pokedex() {
  let api = await fetch('https://pokeapi.co/api/v2/pokemon/')
  let response = await api.json()
  for(let i = 0; i < 20; i++){
    arr.push(response.results[i])
    
    
  }
}
pokedex()
let loop = arr.map((poke, n) =>{
  console.log(n)
  return n
})
console.log(loop)