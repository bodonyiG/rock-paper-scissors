const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerSelect = "";
let gameSelect = "";
var result = "";
let score = "0";
let scoreID = "RPSscore";

getPrevScore();

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
    result = "It's a draw";
  } else if (playerSelect === "rock" && gameSelect === "paper") {
    result = "Game wins";
  }else if (playerSelect === "rock" && gameSelect === "scissors") {
    result = "Player wins";
  }else if (playerSelect === "paper" && gameSelect === "rock") {
    result = "Player wins";
  }else if (playerSelect === "paper" && gameSelect === "scissors") {
    result = "Game wins";
  }else if (playerSelect === "scissors" && gameSelect === "rock") {
    result = "Game wins";
  }else if (playerSelect === "scissors" && gameSelect === "paper") {
    result = "Player wins";
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
  if(result === "Game wins" && nScore > 0){
    nScore --;
  }else if(result === "Player wins"){
    nScore ++;
  }
  score = nScore.toString();
}

function setResult(){
  var pageURL = window.location.href;
  var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  var resBox = $(".result-box h1");
  resBox.text(result);

  let resultItem = document.querySelectorAll(".play-end .item-large");
  resultItem[0].classList = "item-large";
  resultItem[0].classList.add(playerSelect);
  resultItem[1].classList = "item-large";
  resultItem[1].classList.add(gameSelect);
  if(result === "Player wins"){
    resultItem[0].classList.add("winner");
  }else if(result === "Game wins"){
    resultItem[1].classList.add("winner");
  }
  $(".scores h2").text(score);
  localStorage.setItem(scoreID, score);

}

function getPrevScore(){
  try{
    let myScr = localStorage.getItem(scoreID);
    score = parseInt(myScr);
    console.log("Your retrieved score is: " +score);
  }catch (e){
    console.log(e);
  }
  $(".scores h2").text(score);
}
