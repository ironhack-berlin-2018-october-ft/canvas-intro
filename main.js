var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function degreesToRadians(degrees) {
  return degrees*2*Math.PI / 360
}

function drawPacman(x,y,radius,color="black"){
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, radius, degreesToRadians(320), degreesToRadians(30), true)
  ctx.lineTo(x, y)
  ctx.fill()
}

function drawGrid(size){
  ctx.fillStyle = "red"
  ctx.strokeStyle = "red"
  ctx.globalAlpha = 1
  var fontSize = (5+0.3*size)
  ctx.font = fontSize+"px sans-serif"
  for (var y = size; y < canvas.height; y+= size)  {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
    ctx.textAlign = "left";
    ctx.fillText(y, 0, y)
  }
  for (var x = size; x < canvas.width; x+= size)  {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
    ctx.textAlign = "center";
    ctx.fillText(x, x, fontSize)
  }
}


ctx.font = "15px sans-serif"
ctx.textAlign = "center"
ctx.fillText("Pacman", 50, 20)

for (var y = 40; y <= 180; y+= 20) {
  drawPacman(50, y, 8, "rgb("+(y+20)+",0,0)")
}

var img = new Image();
img.src = 'images/berlin.jpeg'
img.onload = function() {
  ctx.drawImage(img, 400, 600,400,400/300*168);
}


drawGrid(200)


// // Drawing Pacman on click
// canvas.onclick = function(event) {
//   console.log(event)
//   drawPacman(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetLeft, 10)
// }

