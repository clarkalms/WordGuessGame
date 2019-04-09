$(document).ready(function () {

    // Variables
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wordList;
    var randomCategories;
    var word;
    var userGuess;
    var guesses = [];
    var lives;
    var counter;
    var spaces;

    // Elements
    var myLives = document.getElementById('tries');
    var displayCategory = document.getElementById('category');
    var displayEmptyWord = document.getElementById('emptyword');
    var showClue = document.getElementById('clue');

    // Letter Buttons
    function letterButtons() {
        for (var i = 0; i < alphabet.length; i++) {
            var letterBtn = $("<button>");
            letterBtn.addClass("letter-button letter letter-button-color");
            letterBtn.attr("active", alphabet[i]);
            letterBtn.text(alphabet[i]);
            $("#buttons").append(letterBtn);
            
        }
    }
    // Choose a Category
    function pickCat() {
        console.log(randomCategories);
        if (randomCategories === wordList[0]) {
            displayCategory.innerHTML = "The Category is: Movies";
        } else if (randomCategories === wordList[1]) {
            displayCategory.innerHTML = "The Category is: Music";
        } else if (randomCategories === wordList[2]) {
            displayCategory.innerHTML = "The Category is: TV Shows";
        } else if (randomCategories === wordList[3]) {
            displayCategory.innerHTML = "The Category is: Celebrities";
        }
    }

    // User Guess
    //todo: change ul to a div or h1 tag push underscores to the correct variable
    function letterGuess() {
        wordHolder = document.getElementById("hold");
        var correct = document.createElement("h3");
        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            userGuess = document.createElement('li');
            userGuess.setAttribute('class', 'user-guess');
            console.log(word);
            if (word[i] === "-") {
                userGuess.innerHTML = "-";
                spaces = 1;
                // append(userGuess);
            } else {
                userGuess.innerHTML = "_";
            }

            guesses.push(userGuess);
            wordHolder.appendChild(correct);
            correct.appendChild(userGuess);

        }
    }

    // User Click
    function userClick() {
        letterBtn.onclick = function () {
            var userGuess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === userGuess) {
                    guesses[i].innerHTML = userGuess;
                    counter += 1;
                }
            }
            var a = (word.indexOf(userGuess));
            if (a === -1) {
                lives -= 1;
                letterGuess();
            } else {
                letterGuess();
            }
        }
    }

    // User Lives
    function lives() {
        myLives.innerHTML = "Tries: " + lives;
        if (lives < 1) {
            myLives.innerHTML = "Game Over!"
        }
        for (i = 0; i < guesses.length; i++) {
            if (counter + spaces === guesses.length) {
                myLives.innerHTML = "And the Oscar goes to... YOU!";
            }
        }
    }

    // Play the Game
    function play() {
        wordList = [
            ["Intersteller", "The Dark Knight", "Jaws", "The Lego Movie"],
            ["Rolling In The Deep", "Let It Be", "Smells Like Teen Spirit", "Bohemian Rhapsody"],
            ["Breaking Bad", "Game of Thrones", "Sherlock", "Baywatch"],
            ["George Clooney", "Kim Kardashian", "Dwayne Johnson", "Michael Jordan"]
        ];
        randomCategories = wordList[Math.floor(Math.random() * wordList.length)];
        word = randomCategories[Math.floor(Math.random() * randomCategories.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        letterButtons();
        guesses = [ ];
        lives = 6;
        counter = 0;
        spaces = 0;
        letterGuess()
        // lives();
        pickCat();
    }
    play();

});