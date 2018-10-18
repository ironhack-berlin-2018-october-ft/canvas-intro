var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function degreesToRadians(degrees) {
  return degrees*2*Math.PI / 360
}

function drawPacman(x,y,radius){
  ctx.beginPath()
  ctx.arc(x, y, radius, degreesToRadians(320), degreesToRadians(30), true)
  ctx.lineTo(x, y)
  ctx.fill()
}

// for (var y = 20; y <= 180; y+= 20) {
//   drawPacman(50, y, 8)
// }

// // Drawing Pacman on click
// canvas.onclick = function(event) {
//   console.log(event)
//   drawPacman(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetLeft, 10)
// }

