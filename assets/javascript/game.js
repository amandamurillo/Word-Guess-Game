//1. Use key events to listen for the letters that your players will type.
//2. Display the following on the page:Press any key to get started!

//3. Track Wins: (# of times user guessed the word correctly).
//6. Number of Guesses Remaining: (# of guesses remaining for the user).

//4. If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//5. As the user guesses the correct letters, reveal them: m a d o _  _ a.

//7. Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
//8. After the user wins/loses the game should automatically choose another word and make the user play it. -->


// var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var words = ['cat', 'tree','bark', 'defiant', 'moses', 'language', 'chrysanthemum']
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var randomWord;
var dashedWord;
var guessedLetters = [];
var guessingWord = [];
var wins = 0;
var losses = 0;
var guessesLeft = 8; 
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var guessText = document.getElementById("guessedletters-text");
var guessWord = document.getElementById("guessedwords-text");
var guessesLeft = document.getElementById("guessesleft-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//1. Use key events to listen for the letters that your players will type.


//2. Display the following on the page: Press any key to get started!

// alert("Press any key to get started!");

function startGame(){

    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    makeDashes(randomWord);
}



// 3 && 6 tracking:
   
    // Placeholder arrays


// <!-- Computer choosing random word -->


function makeDashes(word){
// 4. Display number of letters when the game starts
    for (var i = 0; i < word.length; i++) {
        guessingWord.push("-");
    }
    guessText.textContent = guessingWord.join('');
}
// this function takes a letter, finds all instances of letter in randomWord
//if there is a match, pushes index of letter to placeholder array positions
//if empty array, subtract a guess 
//else will take array of [_ _ _ _ _] and put replaces _ them in the guess word.

function evaluateGuess(letter) {
    //  Array that will hold pushed indicies
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === letter) {
            positions.push(i);
            //we want to remember where letter is (index) and replace in same position in guessing word array
        }
    }
    // if there are no indicies( positions arr length less than or equal to 0), remove a guess
    if (positions.length <= 0) {
        guessesLeft--;
//5. As the user guesses the correct letters, reveal them: m a d o _  _ a.

    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}; 

function makeGuess(letter) {
    if (guessesLeft > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet, indexOf equaling -1 means it is not in array
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
}


 //translate HTML into JS var and use to manipulate in JS



// // Hide the directions
// directionsText.textContent = "";

//  // Display the user and computer guesses, and wins/losses/ties.
// userChoiceText.textContent = "You chose: " + userGuess;
// computerChoiceText.textContent = "The computer chose: " + computerGuess;
// winsText.textContent = "wins: " + wins;
// lossesText.textContent = "losses: " + losses;
// tiesText.textContent = "ties: " + ties;

document.onkeyup = function(event) {
    var userGuess = event.key;

    for(var i = 0; i < randomWord.length; i++){
        if(userGuess === randomWord[i]){
            // console.log("you found a letter!")
            guessingWord[i] = userGuess;
            guessText.textContent = guessingWord.join('');
        }
    }

    if(randomWord === guessingWord.join('')){
        alert("You win!");
        startGame();
    }
    
}


startGame();