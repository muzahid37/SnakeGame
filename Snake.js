///boxs
var blockSize = 25;
var rows = 20;
var collams = 20;
var box;
var context;
//snake style
window.onload = function () {
  box = document.getElementById("box");
  box.height = rows * blockSize;
  box.width = collams * blockSize;
  context = box.getContext("2d");
  update();
};
function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, box.width, box.height);
}
