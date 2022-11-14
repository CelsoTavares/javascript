


async function post() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data.map((post) => {
      console.log(post.title)
    })
  }
  catch(err) {
    console.error('Nooo, we got an error!', err)
  }
}
post()


async function multPost(users) {
  try {
    const promises = users.map(user => fetch(`${user}`)).then(r => r.json)
    const people = await Promise.all(promises)
      console.log(people)
  }
  catch(err) {
    console.error('Nooo, we got an error!', err)
  }
    }
    
    multPost(['primeiro', 'segundo'])

  
 
  
//   catch(err) {
//     console.error('Nooo, we got an error!', err)
//   }
// }
