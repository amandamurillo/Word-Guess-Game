//1. Use key events to listen for the letters that your players will type.
//2. Display the following on the page:Press any key to get started!

//3. Track Wins: (# of times user guessed the word correctly).
//6. Number of Guesses Remaining: (# of guesses remaining for the user).

//4. If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//5. As the user guesses the correct letters, reveal them: m a d o _  _ a.

//7. Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
//8. After the user wins/loses the game should automatically choose another word and make the user play it. -->


var words = ['cat', 'tree','bark', 'defiant', 'moses', 'language', 'chrysanthemum']
var randomWord;
var hasFinished = false;
var dashedWord;
var guessedLetters = [];
var guessingWord = [];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var maxTries = 4; 
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
}

function makeDashes(word){
    for (var i = 0; i < word.length; i++) {
        guessingWord.push("-");
    }
    guessText.textContent = guessingWord.join('');
}

function reset(){
guessText.textContent = ""; 
guessesLeft = maxTries;
startGame();
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    userGuessText.textContent = guessedLetters.join(' ');
    
    for(var i = 0; i < randomWord.length; i++){
        if(userGuess === randomWord[i]){
            // console.log("you found a letter!")
            guessingWord[i] = userGuess;
            guessText.textContent = guessingWord.join('');
        }
    }

    if(randomWord === guessingWord.join('')){
        alert("You win!");
        hasFinished = true;
        wins ++;
        reset();
  }
}

startGame();