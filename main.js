//Background

var width  = window.innerWidth;
var height = window.innerHeight;

var b_canvas = document.getElementById("background");
var b_ctx = b_canvas.getContext('2d');

b_ctx.canvas.width  = width;
b_ctx.canvas.height = height;

function createBackground(){
    b_ctx.beginPath();
    b_ctx.rotate(15 * Math.PI / 180);
    b_ctx.rect(vw(10)+vh(5), height+vh(20), vw(25), vh(-60));
    b_ctx.fillStyle = "rgba(0, 0, 133, 0.2)";
    b_ctx.fill();

    b_ctx.setTransform(1, 0, 0, 1, 0, 0);

    b_ctx.beginPath();
    b_ctx.rotate(30 * Math.PI / 180);
    b_ctx.rect(width-vw(30), vh(-50)+vw(-30), vw(60), vh(60));
    b_ctx.fillStyle = "rgba(236, 189, 83, 0.3)";
    b_ctx.fill();
}

createBackground()

//Bubbles

var canvas = document.getElementById("bubbles");
var ctx = canvas.getContext('2d');

ctx.canvas.width  = width;
ctx.canvas.height = height;

function createCircle(x, y, radius, fill = '#000f'){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fill
    ctx.fill();
}

function vw(x){
    return x*width/100
}

function vh(y){
    return y*height/100
}

var bubbles = {}

function createBubble(x, y, radius, color, mass){
    var id = Math.floor(Math.random()*10000);
    var newBubble = {
        id: id,
        x: x,
        y: y,
        offsetX: 0,
        offsetY: 0,
        radius: radius,
        color: color,
        mass: mass
    };
    bubbles[id] = newBubble;
}

createBubble(16, 88, 2.25, '#7c70ff', 0)
createBubble(92, 78, 2.25, '#C0F1A9', 0)
createBubble(86, 15, 2.25, '#FFD67F', 0)
createBubble(11, 76, 1.5, '#b9a0ff', -1)
createBubble(90, 87, 1.5, '#8AD3B7', -1)
createBubble(88, 6, 1.5, '#FFB064', -1)
createBubble(20, 70, 1, '#5879E2', -2)
createBubble(79, 75, 1, '#AAE8DB', -2)
createBubble(78, 12, 1, '#FFC2BD', -2)

function drawBubbles(){
    for (var bubbleID in bubbles){
        bubble = bubbles[bubbleID];
        createCircle(vw(bubble.x+bubble.offsetX), vh(bubble.y+bubble.offsetY), vh(bubble.radius), bubble.color);
        console.log(bubble.color)
    }
}

drawBubbles()

//Event Listeners

window.addEventListener("resize", function(event) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    b_ctx.canvas.width  = window.innerWidth;
    b_ctx.canvas.height = window.innerHeight;

    width  = window.innerWidth;
    height = window.innerHeight;

    createBackground()
    drawBubbles()
});

function findScreenCoords(mouseEvent)
{
  var xpos;
  var ypos;
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY;
  }
  else
  {
    //IE
    xpos = window.event.screenX;
    ypos = window.event.screenY;
  }
  document.getElementById("screenCoords").innerHTML = xpos + ", " + ypos;
}
document.getElementById("screenBox").onmousemove = findScreenCoords; 