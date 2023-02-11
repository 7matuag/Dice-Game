var randnum1 = Math.ceil(6 * Math.random());
document.querySelector(".img1").src = "images/dice" + randnum1 + ".png";

var randnum2 = Math.ceil(6 * Math.random());
document.querySelector(".img2").src = "images/dice" + randnum2 + ".png";

if (randnum1 === randnum2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randnum1 > randnum2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
} else if (randnum1 < randnum2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}
