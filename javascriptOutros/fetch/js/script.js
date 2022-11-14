

// const requisicao= fetch('https://api.adviceslip.com/advice').then((r) => r.json())
// .then(jsonBody => {
//   let conselho = jsonBody.slip.advice
  
//   imprime.innerHTML = conselho
//   // console.log(jsonBody)
//   })


async function ativar() {
  let response = await fetch('https://api.adviceslip.com/advice')
  let peguei = await response.json()
  let conselho = peguei.slip.advice
  console.log(conselho)
  document.querySelector('#app').innerHTML = conselho
}

// const peguei = fetch('https://api.adviceslip.com/advice')
// .then(x => (x.json()))
// .then(y => y.slip.advice);
