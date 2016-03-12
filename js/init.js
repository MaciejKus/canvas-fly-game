//init canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//game size is either window height or width, depending on which is larger
var gameSize = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
canvas.width = gameSize - 8;
canvas.height = gameSize - 8; //-4px due to border size. want this to fit in widnowd without any scroll bars

//variables
var theGame;
var enemySize = 20;
var enemySpeed = .03; //angle for rotation
var enemyFireSpeed = 60;
var enemyLife = 6; //times bullets can hit enemy
var backgroundRadius = canvas.width/2 - 30;
//direction hero is moving
var heroDir = 0; //0 is stationary
var moveSpeed = 6;
var heroSpin = 0; //rotation direction (postivie or negative)
var heroAngle = 0.2; //base spin speed
var heroSize = 25; //used to build triangle
var heroShoot = false; //used to see if space bar was pressed this round
var heroShootSpeed = 10;
var heroLife = 10; //initial hero lives (times can be hit by bullets)
var bulletSize = 5;
var level = 1; //used to track how many enemies to create

//draw background circle
function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, backgroundRadius, 0, 2*Math.PI);
  ctx.stroke();
};

function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = hero.color;
  ctx.fillText(hero.life, 20,20);
}

window.addEventListener('keydown', keyPressed, false);
window.addEventListener('keyup', keyUnPressed, false);

function keyPressed(e) {
  switch(e.keyCode) {
    //up arrow
    case 38:
      heroDir = 1;
      break;
    case 40:
      heroDir = -1;
      break; 
    //left arrow
    case 37:
      heroSpin = 1;
      break;
    case 39:
      heroSpin = -1;
      break;
    //space
    case 32:
      heroShoot = true; //sets variable so that shot comes at right time in relation to draw and move
      break;
    //esc
    case 27:
      console.log('Restart');
      break
  } //end switch
}

function keyUnPressed(e) {
  switch(e.keyCode) {
    //moving
    case 38:
    case 40:
      heroDir = 0;
      break; 
    //spinning
    case 37:
    case 39:
      heroSpin = 0;
      break;
    case 32:
      heroShoot = false; 
      break;
  } //end switch
}

