const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 40;
let y = 460;
let radius = 17;
let speed = 10;

let aradius = 17;
let aspeed = 10;
let ax = 560;
let ay = 40; 

let greenScore = 0;
let yellowScore = 0;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let wPressed = false;
let sPressed = false;
let aPressed = false;
let dPressed = false;

//game Loop
function drawGame(){
    requestAnimationFrame(drawGame);
    let result = greenWins();
    if (result){
        return;
    }
    let result1 = yellowWins();
    if (result1){
        return;
    }
    clearScreen();
    inputs();
    boundryCheck();
    finishLineDetection();
    drawGreenScore();
    drawYellowScore();
    drawGreenBlob();
    drawYellowBlob();
    wallsOfGame();
    finishLine();
    //yellowWins();
    //ammo();
}

function greenWins(){
    let greenWinner = false;

    if(greenScore < 3 && yellowScore < 3){
        return greenWinner;
    }

    if(greenScore > 2){
        greenWinner = true;
    }

    if(greenWinner){
    ctx.fillStyle = "green";
    ctx.fillRect(100, 150, 400, 200);
    
    ctx.fillStyle = "white";
    ctx.font = "40px Verdana";
    ctx.fillText("Green ball wins!", 135, 260 );
    }
    return greenWinner;
    
}

function yellowWins(){
    let yellowWinner = false;

    if(greenScore < 3 && yellowScore < 3){
        return yellowWinner;
    }

    if(yellowScore > 2){
        yellowWinner = true;
    }

    if(yellowWinner){
    ctx.fillStyle = "yellow";
    ctx.fillRect(100, 150, 400, 200);
    
    ctx.fillStyle = "black";
    ctx.font = "40px Verdana";
    ctx.fillText("Yellow ball wins!", 135, 260 );
    }
    return yellowWinner;
    
}

function finishLineDetection(){
    if( x > 275 - radius && y > 240 - radius){
        greenScore ++;
        aradius+=1.25;
        x = 40;
        y = 460;
        ax = 560;
        ay = 40;
    }
    if( ax < 325 + aradius && ay < 260 + aradius){
        yellowScore ++;
        radius+=1.25;
        x = 40;
        y = 460;
        ax = 560;
        ay = 40;
    }
}

function drawGreenScore(){
    ctx.fillStyle = "green";
    ctx.font = "18px Verdana";
    ctx.fillText( "Score: " + greenScore, 40, 20);
}


function drawYellowScore(){
    ctx.fillStyle = "yellow";
    ctx.font = "18px Verdana";
    ctx.fillText( "Score: " + yellowScore, canvas.width - 120, canvas.height - 10);
}

function boundryCheck(){
    if( y < radius) {
        y = 460;
        x = 40;
    }
    if( ay < radius) {
        ay = 40;
        ax = 560;
    }
    if( x < radius){
        x = 40;
        y = 460;
    }
    if (ax > 600 - aradius){
        ax = 560;
        ay = 40;
    }
    if ( y > 500 - radius) {
        y = 460;
        x = 40;
    }
    if ( ay > 500 - aradius) {
        ax = 560;
        ay = 40;
    }
    if (x > 80 - radius && x < 100 + radius && y > 80 - radius){
        x = 40;
        y = 460; 
    }
    if (x > 170 - radius && x < 190 + radius && y < 430 + radius){
        x = 40;
        y = 460; 
    }
    if (x > 250 - radius && x < 270 + radius && y > 60 - radius ){
        x = 40;
        y = 460; 
    }
    if ( ax > 250 - aradius && ax < 270 + aradius && ay > 60 - aradius){
        ax = 560;
        ay = 40;
    }
    if (x > 330 - radius && x < 350 + radius && y < 430 + radius){
        x = 40;
        y = 460;
    }
    if (ax > 330 - aradius && ax < 350 + aradius && ay < 440 + aradius){
        ax =  560;
        ay = 40;
    }
    if (ax > 410 - aradius && ax < 430 + aradius && ay > 70 - aradius){
        ax = 560;
        ay = 40; 
    }
    if (ax > 500 - aradius && ax < 520 + aradius && ay < 420 + aradius){
        ax = 560;
        ay = 40; 
    }
}

function inputs(){
    if (upPressed) {
        y = y - speed;
    }
    if(downPressed) {
        y = y + speed;
    }
    if(leftPressed) {
        x = x - speed;
    }
    if(rightPressed) {
        x = x + speed;
    }
    if(wPressed) {
        ay = ay - aspeed;
    }
    if(sPressed) {
        ay = ay + aspeed;
    }
    if(dPressed) {
        ax = ax + aspeed;
    }
    if(aPressed){
        ax = ax - aspeed;
    }
};
//requestAnimationFrame(func)
//setInterval(drawGame, 1000)


function drawGreenBlob(){
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2);
    ctx.fill();

}

function food(){
    ctx.fillStyle= 'yellow';
    ctx.fillRect(280,470, 20,20);
}

function drawYellowBlob(){
    ctx.fillStyle= 'yellow';
    ctx.beginPath();
    ctx.arc(ax,ay, aradius, 0, Math.PI * 2);
    ctx.fill();
}
function finishLine(){
    ctx.fillStyle= "white";
    ctx.fillRect(275,240, 10, 10);
    ctx.fillStyle= "white";
    ctx.fillRect(295,240, 10, 10);
    ctx.fillStyle= "white";
    ctx.fillRect(315,240, 10, 10);
    ctx.fillStyle= "white";
    ctx.fillRect(305,250, 10, 10);
    ctx.fillStyle= "white";
    ctx.fillRect(285,250, 10, 10);
}

function wallsOfGame(){
    ctx.fillStyle= 'red';
    ctx.fillRect(80,80, 20, 500);
    ctx.fillStyle= 'red';
    ctx.fillRect(170,0, 20, 430);
    ctx.fillStyle= 'red';
    ctx.fillRect(250,60, 20, 500);
    ctx.fillStyle= 'red';
    ctx.fillRect(330,0, 20, 440);
    ctx.fillStyle= 'red';
    ctx.fillRect(410,70, 20, 500);
    ctx.fillStyle= 'red';
    ctx.fillRect(500,0, 20, 420);
    
}

function clearScreen(){
   ctx.fillStyle= "Black";
   ctx.fillRect(0,0, canvas.width, canvas.height); 
}

document.body.addEventListener("keydown",keyDown);
document.body.addEventListener('keyup',keyUp);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPressed= true;
    }
    
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
    //aUp
    if(event.keyCode == 87){
        wPressed = true;
    }
    //adown
    if(event.keyCode == 83){
        sPressed = true;
    }
    //aright
    if(event.keyCode == 68){
        dPressed = true;
    }
    //aleft
    if(event.keyCode == 65){
        aPressed = true;
    }
};

function keyUp(event){
    //up
    if(event.keyCode == 38){
        upPressed= false;
    }
    
    //down
    if(event.keyCode == 40){
        downPressed = false;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = false;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = false;
    }
    //aUp
    if(event.keyCode == 87){
        wPressed = false;
    }
    //aDown
    if(event.keyCode == 83){
        sPressed = false;
    }
    //aright
    if(event.keyCode == 68){
        dPressed = false;
    }
    //aleft
    if(event.keyCode == 65){
        aPressed = false;
    }
};
    

drawGame();
/*or setInterval(drawGame, 1000/60); 
which means 1000 frames per second*/




