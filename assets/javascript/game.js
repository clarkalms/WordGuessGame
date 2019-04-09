$(document).ready(function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var categories = ["Movies", "Music", "Television", "Celebrities"];
  var movieWords = ["Intersteller", "The Dark Knight", "Jaws", "The Lego Movie"];
  var musicWords = ["Rolling In The Deep", "Let It Be", "Smells Like Teen Spirit", "Bohemian Rhapsody"];
  var tvWords = ["Breaking Bad", "Game of Thrones", "Sherlock", "Baywatch"];
  var celebWords = ["George Clooney", "Kim Kardashian", "Dwayne Johnson", "Michael Jordan"];
  var guesses = [];
  var counter;
  var wrongGuesses = [];
  var letterGuessed = [];
  var wins = 0;
  var losses = 0;
  var lives = 6;
  var myLives = document.getElementById('tries');
  var displayCategory = document.getElementById('category');
  var displayEmptyWord = document.getElementById('emptyword');
  var showClue = document.getElementById('clue');
  var randomCategories = categories[Math.floor(Math.random() * categories.length)];
  var randomMovieWords = movieWords[Math.floor(Math.random() * movieWords.length)];
  var randomMusicWords = musicWords[Math.floor(Math.random() * musicWords.length)];
  var randomTvWords = tvWords[Math.floor(Math.random() * tvWords.length)];
  var randomCelebWords = celebWords[Math.floor(Math.random() * celebWords.length)];
  var lettersAndEmptySpace = [];
  var lettersInChosenWord = []; 
  var numBlanks = 0;
  var chosenWord = "";
  var displaystring = "";

  for (var i = 0; i < alphabet.length; i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", alphabet[i]);
    letterBtn.text(alphabet[i]);
    $("#buttons").append(letterBtn);
  };





  function startGame() {
    lives = 6;
   


    if (randomCategories == categories[0]) {
      displayCategory.innerHTML = "The Category is: Movies";
      chosenWord = randomMovieWords;
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      for (var i = 0; i < numBlanks; i++) {
        lettersAndEmptySpace.innerHTML = lettersAndEmptySpace.push("_");
      }
      console.log(displayEmptyWord.innerHTML.join(" "));
      console.log(chosenWord);
    } else if (randomCategories === categories[1]) {
      displayCategory.innerHTML = "The Category is: Music";
      chosenWord = randomMusicWords;
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      for (var i = 0; i < numBlanks; i++) {
        displaystring += "_ ";
        displayEmptyWord.innerHTML = displaystring;
      }
      console.log(chosenWord);
    } else if (randomCategories === categories[2]) {
      displayCategory.innerHTML = "The Category is: Television";
      chosenWord = randomTvWords;
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      for (var i = 0; i < numBlanks; i++) {
        displaystring += "_ ";
        displayEmptyWord.innerHTML = displaystring;
      }
      console.log(chosenWord);
    } else if (randomCategories === categories[3]) {
      displayCategory.innerHTML = "The Category is: Celebrities";
      chosenWord = randomCelebWords;
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      for (var i = 0; i < numBlanks; i++) {
        displaystring += "_ ";
        displayEmptyWord.innerHTML = displaystring;
      }
      console.log(chosenWord);
    }
};

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}
startGame();


for (var i = 0; i < movieWords.length; i++) {
  lettersAndEmptySpace += " _ "
  console.log(lettersAndEmptySpace);
  if (selectedCat === categories[0]) {
    displayEmptyWord.innerHTML = movieWords[i].length;
    console.log(randomMovieWords);
  } else if (selectedCat === categories[1]) {
    displayEmptyWord.innerHTML = lettersAndEmptySpace;
  } else if (selectedCat === categories[2]) {
    displayEmptyWord.innerHTML = lettersAndEmptySpace;
  } else if (selectedCat === categories[3]) {
    displayEmptyWord.innerHTML = lettersAndEmptySpace;
  }
}

myLives.innerHTML = lives;
if (lives < 1) {
  myLives.innerHTML = "Game Over";
}
for (var i = 0; i < guesses.length; i++) {
  if (counter + space === guesses.length) {
    showLives.innerHTML = "You Win!";
  }
}


displayCategory.innerHTML = randomCategories;
console.log(randomMovieWords.length);
displayEmptyWord.innerHTML = lettersAndEmptySpace;
console.log(lettersAndEmptySpace);

selectedCat = function () {
  selectedCat = randomCategories;
  console.log(randomCategories);
}








    // console.log(alphabet = alphabet[18].createElement("br"));
    // if (i != 0 && (i % 4) == 0) {
    //   letterBtn.text("<br>");
    //   letterBtn.text("<button>" + letterBtn[i] + "</button>")
    // }













  });
