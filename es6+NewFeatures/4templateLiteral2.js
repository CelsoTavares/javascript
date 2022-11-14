



const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

function green(template, ...values) {
      return template.reduce((accumulator, part, i) => {
        return `
        ${accumulator}
        <span>${values[i -1]}.toUpperCase()}</span>
        ${part}
        `
      })
}
const ireland = green`I live in ${city} the city of ${something} and ${otherThing}`
console.log(ireland)


