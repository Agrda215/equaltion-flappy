var score = new OmegaNum(0);
var objectatules = 1;
var x = [100, 360];
var y = [120, 230];

/**
 * The Public Be Repository.
 */
let name;

name = "Equaltion Flappy";

var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var down = document.getElementById("down");
var player = document.getElementById("player");
var okopu = document.getElementById("okopu");

left.onclick = () => {
  x[0] += 20;
};

right.onclick = () => {
  x[0] -= 20;
};

up.onclick = () => {
  y[0] -= 20;
};

down.onclick = () => {
  y[0] += 20;
};

function getAddScore() {
  score = score.add(1);
  x[1] += 100;
}

function UpdateGameArea() {
  left.style.backgroundColor = "rgb(128, 128, 128)";
  right.style.backgroundColor = "rgb(128, 128, 128)";
  up.style.backgroundColor = "rgb(128, 128, 128)";
  down.style.backgroundColor = "rgb(128, 128, 128)";
  player.title = "Player";
  player.style.margin = "3px";
  player.style.left = x[0] + "px";
  player.style.top = y[0] + "px";
  objectatules = score.toString(6);
  okopu.title = "OkOpU";
  okopu.style.margin = "3px";
  okopu.style.left = x[1] + "px";
  okopu.style.top = y[1] + "px";
  if (x[0] >= x[1]) {
    getAddScore();
  }
  document.getElementsByTagName("h1")[0].innerText = score;
  document.getElementsByTagName("h1")[0].title = score + " / 100";
  document.getElementsByTagName("h1")[0].style.textAlign = "center";
  document.getElementsByTagName("h1")[0].style.fontFamily =
    "Lucida Console, sans-serif";
  document.getElementsByTagName("h1")[0].style.fontWeight = "bold";
}

setInterval(() => {
  UpdateGameArea();
}, 100);
