
$(document).ready(function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
         't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var catagories = ["Movies", "Music"];
    var selectedCat;
    var guesses = [];
    var lives = 6;
    var counter;
    var emptySpace;
    var wins = 0;
    var losses = 0;
    var myLives = document.getElementById('lives');
    var displayCatagory = document.getElementById('catagory');
    var showClue = document.getElementById('clue');

        for (var i = 0; i < alphabet.length; i++) {
            var letterBtn = $("<button>");
            letterBtn.addClass("letter-button letter letter-button-color");
            letterBtn.attr("data-letter", alphabet[i]);
            letterBtn.text(alphabet[i]);
            $("#buttons").append(letterBtn);
        }
        comments = function () {
            showLives.innerHTML = "Tries left: " + lives;
            if (lives < 1) {
              showLives.innerHTML = "Game Over";
            }
            for (var i = 0; i < guesses.length; i++) {
              if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
              }
            }
          }

    




});
