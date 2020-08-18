const canvas = document.getElementById("pong")

const context = canvas.getContext("2d");
context.filterStyle = "black"
context.fillRect(100, 200, 50, 75);
context.filterStyle = "red"
context.beginPath();
context.arc( 300, 350, 100, 0, Math.PI*2,false);

function drawRect(x, y, w, h, color){
    ctx.filterStyle = color;
    ctx.fillRect(x, y, w, h);
}

