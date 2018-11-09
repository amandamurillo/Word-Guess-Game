
var words = ['cat', 'tree','bark', 'defiant', 'moses', 'language', 'chrysanthemum']
var randomWord;
var dashedWord;
var guessedLetters = [];
var guessingWord = [];
var wins = 0;
var losses = 0;
var maxTries = 10; 
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var guessText = document.getElementById("guessedletters-text");
var guessesLeft = document.getElementById("guessesleft-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


function startGame(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    makeDashes(randomWord);
    guessesLeft.textContent = "guesses left: " + maxTries;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
}

function makeDashes(word){
    for (var i = 0; i < word.length; i++) {
        guessingWord.push("-");
    }
    guessText.textContent = guessingWord.join('');
}

function reset(){
    guessText.textContent = ""; 
    guessingWord = [];
    guessedLetters = [];
    userGuessText.textContent = guessedLetters.join(' ');
    maxTries = 10;
    }


function checkLoss(number){
   if(maxTries <=0){
    alert("You lost!");
    losses ++;
    reset();
    startGame();
   }
}

function checkWin(something){
    if(randomWord === guessingWord.join('')){
        alert("You win!");
        wins ++;
        reset();
        startGame();
    }
}



document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyPicked = true;

    if(event.keyCode >= 65 && event.keyCode <= 90){
        guessedLetters.push(userGuess);
        userGuessText.textContent = guessedLetters.join(' ');
    }

    for(var i = 0; i < randomWord.length; i++){
        if(userGuess === randomWord[i]){
            // console.log("you found a letter!")
            guessingWord[i] = userGuess;
            guessText.textContent = guessingWord.join('');
        }
    }
    for(var i = 0; i < randomWord.length; i++){
        if(userGuess !== randomWord[i]){
            console.log("wrong again");
            alreadyPicked = false;
        }
    }
       if(alreadyPicked === false){
        maxTries--;
        guessesLeft.textContent = "guesses left: " + maxTries;
        }

        checkWin();
        checkLoss();

}


startGame();


//nto allow repeats