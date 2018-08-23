//Assigning global variables: wins, losses, yourScore, targetNum
var yourScores;
var targetNum;
var wins = 0;
var losses = 0;
var crystalVal;
var crystalVal0;
var crystalVal1;
var crystalVal2; 

//Define a function startGame to reStart the game
function startGame() {
    yourScore = 0;
    targetNum = Math.floor(Math.random()*102)+19;
    crystalVal = Math.floor(Math.random()*12)+1;
    crystalVal0 = Math.floor(Math.random()*12)+1;
    crystalVal1 = Math.floor(Math.random()*12)+1;
    crystalVal2 = Math.floor(Math.random()*12)+1;
    
    //Put everything to HTML
    $("#wins").text("wins:" + wins);
    $("#losses").text("losses:"+ losses);
    $("#yourScore").text("Your total score:" + yourScore);
    $("#targetNum").text("Target number:"+targetNum);
}

startGame();

  $("#crystal1").on("click", function() {

//When a crystal is clicked, the assigned value will be added to yourScore
yourScore += crystalVal;
alert(yourScore);
$("#yourScore").text("Your total score:" + yourScore);

//When yourScore === targetNum, you win (alert, win++)
if (yourScore === targetNum) {
    wins++;
    alert("You win!");
    $("#wins").text("wins:" + wins);

    //game restart
    startGame();
}
//When yourScore > targetNum, you lose (alert, loss++)
else if (yourScore > targetNum) {
    losses++;
    alert("You lose!");
    $("#losses").text("losses:"+ losses);
    //game restart
    startGame();
}

});

  $("#crystal2").on("click", function() {

//When a crystal is clicked, the assigned value will be added to yourScore
yourScore += crystalVal0;
alert(yourScore);
$("#yourScore").text("Your total score:" + yourScore);

//When yourScore === targetNum, you win (alert, win++)
if (yourScore === targetNum) {
    wins++;
    alert("You win!");
    $("#wins").text("wins:" + wins);

    //game restart
    startGame();
}
//When yourScore > targetNum, you lose (alert, loss++)
else if (yourScore > targetNum) {
    losses++;
    alert("You lose!");
    $("#losses").text("losses:"+ losses);
    //game restart
    startGame();
}

});

  $("#crystal3").on("click", function() {

//When a crystal is clicked, the assigned value will be added to yourScore
yourScore += crystalVal1;
alert(yourScore);
$("#yourScore").text("Your total score:" + yourScore);

//When yourScore === targetNum, you win (alert, win++)
if (yourScore === targetNum) {
    wins++;
    alert("You win!");
    $("#wins").text("wins:" + wins);

    //game restart
    startGame();
}
//When yourScore > targetNum, you lose (alert, loss++)
else if (yourScore > targetNum) {
    losses++;
    alert("You lose!");
    $("#losses").text("losses:"+ losses);
    //game restart
    startGame();
}

});

  $("#crystal4").on("click", function() {

//When a crystal is clicked, the assigned value will be added to yourScore
yourScore += crystalVal2;
alert(yourScore);
$("#yourScore").text("Your total score:" + yourScore);

//When yourScore === targetNum, you win (alert, win++)
if (yourScore === targetNum) {
    wins++;
    alert("You win!");
    $("#wins").text("wins:" + wins);
    //game restart
    startGame();
}
//When yourScore > targetNum, you lose (alert, loss++)
else if (yourScore > targetNum) {
    losses++;
    alert("You lose!");
    $("#losses").text("losses:"+ losses);
    //game restart
    startGame();
}

});
  

