const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerSelect = "";
let gameSelect = "";

$(".item").on("click", function(){
  if($(this).hasClass("rock")){
    playerSelect = options[0];

  }else if($(this).hasClass("paper")){
    playerSelect = options[1];

  }else if($(this).hasClass("scissors")){
    playerSelect = options[2];

  }

  let gameSelect = options[ Math.floor(Math.random() * 3) ];
  // alert("gameSelect: " + gameSelect + " | playerSelect: " + playerSelect);

  if(gameSelect === playerSelect){
    alert("You won");
  }else{
    alert("you lost");
  }

  // window.location.href = "score.html";

   playerSelect = "";
   gameSelect = "";
});
