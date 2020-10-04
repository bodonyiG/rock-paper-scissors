const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerSelect = "";
let gameSelect = "";
let result = "";
let score = "0";

$(".item").on("click", function() {
  game($(this));

  window.location.href = "score.html";

});

function game(playerItem) {
  setSelection(playerItem);

  if (playerSelect === gameSelect) {
    result = "draw";
  } else if (playerSelect === "rock" && gameSelect === "paper") {
    result = "game wins";
  }else if (playerSelect === "rock" && gameSelect === "scissors") {
    result = "player wins";
  }else if (playerSelect === "paper" && gameSelect === "rock") {
    result = "player wins";
  }else if (playerSelect === "paper" && gameSelect === "scissors") {
    result = "game wins";
  }else if (playerSelect === "scissors" && gameSelect === "rock") {
    result = "game wins";
  }else if (playerSelect === "scissors" && gameSelect === "paper") {
    result = "player wins";
  }else{
    result = "something went wrong";
  }

addScore();

alertStatus();

playerSelect = "";
gameSelect = "";
}

function setSelection(playerItem) {
  //Player's selection
  if (playerItem.hasClass("rock")) {
    playerSelect = options[0];

  } else if (playerItem.hasClass("paper")) {
    playerSelect = options[1];

  } else if (playerItem.hasClass("scissors")) {
    playerSelect = options[2];
  }

  //Game's selection
  gameSelect = options[Math.floor(Math.random() * 3)];

}

function alertStatus() {
  alert("The player selected: " + playerSelect +
  "\r The game selected: " + gameSelect +
  "\r The result is: " + result +
  "\r Your score is: " + score);

}

function addScore(){
  let nScore = parseInt(score);
  if(result === "game wins" && nScore > 0){
    nScore --;
  }else if(result === "player wins"){
    nScore ++;
  }
  score = nScore.toString();
}
