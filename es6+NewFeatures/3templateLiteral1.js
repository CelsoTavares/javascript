// frutas escrito em colunas
const fruta =  
`banana
Pera
Morango`
console.log(fruta)

const article ={
  title: 'Aprendendo template strings',
  intro: 'Uma breve explicação de como usar template string do ES6 em seu código hoje',
  body: '*******************************************************************************************************************',
  tags: ['es6', 'js', 'template-literal']
  // Author: 'Celso'
}
function renderAuthor(name) {
  return (name) ? name : 'unknown';
}

const markup = `
<article>
  <header>
    <h1>${article.title}</h1>
  </header>
  
  <section>
    <p>${article.intro}</p>
  </section>
    
    <footer>
      <ul>
        ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
        <p>Author: ${renderAuthor(article.Author)} </p>
      </ul>
    </footer>

</article>
`;
// usando innerHtml, somente imprimia o conteudo
console.log(markup)