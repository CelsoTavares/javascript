var draw2 = document.getElementById("draw2")


// draw2.style.width = "200"
// draw2.style.height = "100"
var px = 0

var stop = setInterval(() =>{
 
  px++

  console.log(px)
  draw2.style.border = "2px solid red"
  var ctx2 = draw2.getContext("2d")
  ctx2.fillStyle = "green"; 
  // ctx2.moveTo(0, 0) // x   y   comprimento   altura
  // ctx2.lineTo(250, 250) 
  // ctx2.lineTo(400, 250)
  // ctx2.moveTo(250, 250) 
  // ctx2.lineTo(px, 300) 
  // ctx2.stroke();
  ctx2.clearRect(0, 0, 500, 500) //limpa parametro anterior
  ctx2.fillRect(px, 0, 50, 50)

  
}, 50)

function stop1(){

  clearInterval(stop)
}
console.log(stop)
function play(){
stop = setInterval(() =>{

  px++
  draw2.style.border = "2px solid red"
  var ctx2 = draw2.getContext("2d")
  ctx2.fillStyle = "green"; 
ctx2.clearRect(0, 0, 500, 500) 
ctx2.fillRect(px, 0, 50, 50)
}, 50)
}