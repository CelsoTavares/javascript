var draw1 = document.getElementById("draw1")


console.log(draw1)


draw1.style.width = "100"
draw1.style.height = "100"
draw1.style.border = "1px solid black"
draw1.style.position = "absolute"
draw1.style.zIndex = 0

var ctx1 = draw1.getContext("2d")
ctx1.fillStyle = "red"; // add color
ctx1.fillRect(0, 0, 100, 100) // x   y   comprimento   altura
ctx1.fillStyle = "blue"; 
ctx1.fillRect(50, 50, 100, 100)


