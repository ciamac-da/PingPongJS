// select canvas element
const canvas = document.getElementById("pong")

// get context of canvas = methods and properties to draw and to do a lot of thing to the canvas
const context = canvas.getContext("2d");
context.filterStyle = "black"
context.fillRect(100, 200, 50, 75);
context.filterStyle = "red"
context.beginPath();
context.arc( 300, 350, 100, 0, Math.PI*2,false);

// load sounds
let hit = new Audio();
let wall = new Audio();
let userScore = new Audio();
let comScore = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
comScore.src = "sounds/comScore.mp3";
userScore.src = "sounds/userScore.mp3";


function drawRect(x, y, w, h, color){
    ctx.filterStyle = color;
    ctx.fillRect(x, y, w, h);
}

