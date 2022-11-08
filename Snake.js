///boxs
var blockSize = 25;
var rows = 20;
var collams = 20;
var box;
var context;
//snake style
var sankeX = blockSize * 5;
var snakeY = blockSize * 5;

// speed of snake
var speedX = 0;
var speedY = 0;

//food style
var foodX;
var foody;
var gameOver = false;

// snake body
var snakeBody = [];
window.onload = function () {
  box = document.getElementById("box");
  box.height = rows * blockSize;
  box.width = collams * blockSize;
  context = box.getContext("2d");
  foodPosition();
  document.addEventListener("keyup", ChangeDrection);
  //   update();
  setInterval(update, 1000 / 5);
};
function update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "black";
  context.fillRect(0, 0, box.width, box.height);

  context.fillStyle = "white";
  sankeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(sankeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  // eat food
  if (sankeX == foodX && snakeY == foody) {
    snakeBody.push([foodX, foody]);
    foodPosition();
  }
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [sankeX, snakeY];
  }
  context.fillStyle = "red";
  context.fillRect(foodX, foody, blockSize, blockSize);

  if (
    sankeX < 0 ||
    sankeX > collams * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    alert("game ovar");
  }
  for (let i = 0; i < snakeBody.length; i++) {
    if (sankeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("game over");
    }
  }
}

function ChangeDrection(e) {
  if (e.code == "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  } else if (e.code == "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  } else if (e.code == "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  } else if (e.code == "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
}

//food placement
function foodPosition() {
  foodX = Math.floor(Math.random() * collams) * blockSize;
  foody = Math.floor(Math.random() * rows) * blockSize;
}
