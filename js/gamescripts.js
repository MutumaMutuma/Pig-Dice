var scores, turnScore, activePlayer, diceRoll, gameOn;


initializeGame();

$(document).ready(function() {
  $(".roll-dice").click(function() {
    if (gameOn) {
      diceRoll = Math.floor(Math.random() * 6) + 1;
      var diceShow = $(".dice");
      diceShow.attr("src", 'images/throw-' + diceRoll + '.png')
      diceShow.show();
      $("#current-" + activePlayer).text(diceRoll);
      if (diceRoll !== 1) {
        turnScore += diceRoll;
        $("#roundscore-" + activePlayer).text(turnScore);
      } else {
        nextGamer();
      }
    }

  })

  $(".hold-score").click(function() {
    if (gameOn) {
      scores[activePlayer] += turnScore;
      $("#score-" + activePlayer).text(scores[activePlayer]);
      $("#roundscore-0").text(0);
      $("#roundscore-1").text(0);
      var finalScore = parseInt($(".final-score").val());
      var winningScore;
      if (finalScore) {
        winningScore = finalScore;
      } else {
        winningScore = 50;
      }

      if (scores[activePlayer] >= winningScore) {
        $("#name-" + activePlayer).text("CONGRATULATIONS!!!");
        $(".dice").hide();
        $(".gamer-" + activePlayer + "-section").addClass("winner");
        $(".gamer-" + activePlayer + "-section").removeClass("playing");
        $("#roundscore-0").text(0);
        $("#roundscore-1").text(0);
        $(".final-score").val("")
        gameOn = false;
      } else {
        nextGamer();
      }
    }
  })
  $(".new-game").click(function() {
    initializeGame();
  })

})

var nextGamer = function() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  turnScore = 0;
  $("#current-0").text(0);
  $("#current-1").text(0);
  $(".gamer-0-section").toggleClass("playing");
  $(".gamer-1-section").toggleClass("playing");
  $(".dice").hide();
  $("#roundscore-0").text(0);
  $("#roundscore-1").text(0);
}

function initializeGame() {
  scores = [0, 0];
  turnScore = 0;
  activePlayer = 0;
  gameOn = true;
  $("#score-0").text(0);
  $("#score-1").text(0);
  $("#current-0").text(0);
  $("#current-1").text(0);
  $("#roundscore-0").text(0);
  $("#roundscore-1").text(0);
  $(".final-score").val("")
  $("#name-0").text("Player 1");
  $("#name-1").text("Player 2");
  $(".gamer-0-section").removeClass("winner");
  $(".gamer-1-section").removeClass("winner");
  $(".gamer-0-section").removeClass("playing");
  $(".gamer-1-section").removeClass("playing");
  $(".gamer-0-section").addClass("playing");


};
