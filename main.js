//Background

    //Canvas

var canvas = document.getElementById("background");
var ctx = canvas.getContext('2d');

var width  = window.innerWidth;
var height = window.innerHeight;

ctx.canvas.width  = width;
ctx.canvas.height = height;

function createCircle(x, y, radius, fill = '#000'){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fill
    ctx.fill();
}

function vw(x){
    return x*width/100
}

function vh(y){
    return y*width/100
}

//bubble positions: (x, y, radius, color, mass)
var bubblePositions = [ (vw(16), height-vh(12), vh(3), '#7c70ff', 0),
                        (width-vw(12), height-vh(22), vh(3), '#C0F1A9', 0),
                        (width-vw(20), vh(15), vh(3), '#FFD67F', 0),
                        (vw(11), height-vh(24), vh(2), '#b9a0ff', -1),
                        (width-vw(14), height-vh(13), vh(2), '#8AD3B7', -1),
                        (width-vw(18), vh(6), vh(2), '#FFB064', -1),
                        (vw(20), height-vh(30), vh(1), '#5879E2', -2),
                        (width-vw(25), height-vh(25), vh(1), '#AAE8DB', -2),
                        (width-vw(28), vh(12), vh(1), '#FFC2BD', -2),
]

function createLockedBubbles(){
    for (bubble in bubblePositions){
        createCircle(bubble[0], bubble[1], bubble[2], bubble[3])
    }
    console.log("HERE")
}

createLockedBubbles()

//Event Listeners

window.addEventListener("resize", function(event) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    width  = window.innerWidth;
    height = window.innerHeight;
});