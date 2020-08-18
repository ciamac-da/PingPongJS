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


// Ball object
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 7,
    color : "WHITE"
}

// User Paddle
const user = {
    x : 0, // left side of canvas
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}

// COM Paddle
const com = {
    x : canvas.width - 10, // - width of paddle
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}
// NET
const net = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "WHITE"
}


function drawRect(x, y, w, h, color){
    ctx.filterStyle = color;
    ctx.fillRect(x, y, w, h);
}

