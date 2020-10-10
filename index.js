const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerSelect = "";
let gameSelect = "";
var result = "";
let score = "0";

$(".rule-button").on("click", function(){
  $(".rules").css("display", "flex");
});

$(".rules button").on("click", function(){
  $(".rules").css("display", "none");
});

$(".item").on("click", function() {
  setSelection($(this));
  game($(this));
  setResult();
  alertStatus();
  console.log("-------------------------------------------------------")
  $(".play-end").css("display", "flex");
  $(".play-start").css("display", "none");

});

$(".result-box button").on("click", function(){
  playerSelect = "";
  gameSelect = "";
  $(".play-end").css("display", "none");
  $(".play-start").css("display", "block");
  $(".scores h2").text(score);

});


function game(playerItem) {



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
  console.log("The player selected: " + playerSelect +
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

function setResult(){
  var pageURL = window.location.href;
  var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  $(".result-box h1").text(result);

  let resultItem = document.querySelectorAll(".item-large");

  resultItem[0].classList = "item-large";
  resultItem[0].classList.add(playerSelect);
  resultItem[1].classList = "item-large";
  resultItem[1].classList.add(gameSelect);

}
