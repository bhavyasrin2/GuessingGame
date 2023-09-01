"use strict";
var score = 20;
var high = 0;
var num;

function start() {
  num = Number(Math.floor(Math.random() * 20 + 1));
  document.querySelector("body").style.backgroundColor = "rgb(165, 200, 231)";
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".highscore").innerHTML = high;
}

function check() {
  console.log(num);
  var value = Number(document.querySelector(".guess").value);
  console.log(value + " " + typeof value);
  if (value === num) {
    document.querySelector(".message").innerHTML = "you won..!!";
    document.querySelector("body").style.backgroundColor = "rgb(121, 188, 246)";
    document.querySelector(".number").innerHTML = value;
    var highscore = Number(document.querySelector(".highscore").innerHTML);
    if (score > highscore) {
      document.querySelector(".highscore").innerHTML = score;
    }
  } else if (value > num) {
    document.querySelector(".message").innerHTML = "Too Big";
    if (score > 1) {
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = "You Lose..";
      document.querySelector(".score").innerHTML = "0";
    }
  } else if (value < num) {
    document.querySelector(".message").innerHTML = "Too Small";
    if (score > 1) {
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = "You Lose..";
      document.querySelector(".score").innerHTML = "0";
    }
  }
}
