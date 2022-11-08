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

window.onload = function () {
  box = document.getElementById("box");
  box.height = rows * blockSize;
  box.width = collams * blockSize;
  context = box.getContext("2d");
  foodPosition();
  document.addEventListener("keyup", ChangeDrection);
  //   update();
  setInterval(update, 1000 / 10);
};
function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, box.width, box.height);

  context.fillStyle = "white";
  sankeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(sankeX, snakeY, blockSize, blockSize);
  // eat food
  if (sankeX == foodX && snakeY == foody) {
    foodPosition();
  }

  context.fillStyle = "red";
  context.fillRect(foodX, foody, blockSize, blockSize);
}

function ChangeDrection(e) {
  if (e.code == "ArrowUp") {
    speedX = 0;
    speedY = -1;
  } else if (e.code == "ArrowDown") {
    speedX = 0;
    speedY = 1;
  } else if (e.code == "ArrowLeft") {
    speedX = -1;
    speedY = 0;
  } else if (e.code == "ArrowRight") {
    speedX = 1;
    speedY = 0;
  }
}

//food placement
function foodPosition() {
  foodX = Math.floor(Math.random() * collams) * blockSize;
  foody = Math.floor(Math.random() * rows) * blockSize;
}
