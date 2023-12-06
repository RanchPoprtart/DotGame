var gameArray = [];
var Score = 1
var Moves_left = 20
var food = 10;


const ROWS= 8
const COLS = 8

var curRow = 7;
var curCol = 0;

var startRow = curRow;
var startCol = curCol;

document.body.addEventListener("keydown", move);
var gameArea = document.getElementById("gamearea");
var ctx = gameArea.getContext("2d");

for (r = 0; r < ROWS; r++){
    tempArray = []
    for (c = 0; c < COLS; c++){
            tempArray.push(0)
    }
    gameArray.push(tempArray);
}
console.log(gameArray);
gameArray[7][0] = 1;

var madeFood = 0;
while (madeFood < food){
    let r = Math.floor(Math.random() *  8);
    let c = Math.floor(Math.random() *  8);
    if( gameArray[r][c] == 0){
        gameArray[r][c] = 2;
        madeFood++;
    }
}


function drawGame() {
    for (r = 0; r < ROWS; r++){
        for (c = 0; c < COLS; c++){

            if (gameArray[r][c] == 1) {
                ctx.fillStyle = "red";      

            } else if (gameArray[r][c] == 2){
                ctx.fillStyle = "green";

            } else {
                ctx.fillStyle = "pink";
            }
            ctx.fillRect(c * 30 + 5, r * 30 + 5, 25, 25);
        }
    }
}


function drawScores() {
    document.getElementById("score").innerText = "Score:"+ Score;
    document.getElementById("Moves_left").innerText = "Moves left: " + Moves_left;
    document.getElementById("food").innerText = "food remaining: " + food;


}
drawGame(); 
drawScores();

function move(e){
    switch(e.code) {
        case "ArrowUp":
            if(curRow > 0) {
                gameArray[curRow][curCol] = 0;
                curRow--;
                Moves_left--;
            }
            break;
        case "ArrowDown":
            if(curRow < 7) {
                gameArray[curRow][curCol] = 0;
                curRow++;
                Moves_left--;
            }
            break;
        case "ArrowLeft":
            if(curCol > 0) {
                gameArray[curRow][curCol] = 0;
                curCol--;
                Moves_left--;   
            }
            break;
        case "ArrowRight":
            if(curCol < 7) {
                gameArray[curRow][curCol] = 0;
                curCol++;
                Moves_left--;
            }
          

    }
    if (gameArray[curRow][curCol] = 2){
        food--;
        score += Moves_left;
    }
    gameArray[curRow][curCol] = 1;
    drawGame()
    drawScores();
    if (moves == 0){

        alert("Game Over");
    }
    if (curCol == startCol && curRow == startRow && food == 0) {
        score += Moves_left;
        alert("gg you win!!")
    }
    drawScores
}