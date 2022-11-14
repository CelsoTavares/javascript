

let arra1 = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]


function verifique() {

const a = arra1[0].split(", ")
const b = arra1[1].split(", ")


var result = a.filter(x => b.find(a => a === x))

return result.length > 0 ? result.join(",") : 'false'
}
console.log(verifique())
