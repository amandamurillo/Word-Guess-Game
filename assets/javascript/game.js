//1. Use key events to listen for the letters that your players will type.
//2. Display the following on the page:Press any key to get started!

//3. Track Wins: (# of times user guessed the word correctly).
//6. Number of Guesses Remaining: (# of guesses remaining for the user).

//4. If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//5. As the user guesses the correct letters, reveal them: m a d o _  _ a.

//7. Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
//8. After the user wins/loses the game should automatically choose another word and make the user play it. -->


var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var words = ['cat', 'tree','bark', 'defiant', 'moses', 'language', 'chrysanthemum']
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     


//1. Use key events to listen for the letters that your players will type.
document.onkeyup = function(event) {
    var userGuess = event.key;
}

//2. Display the following on the page: Press any key to get started!

alert("Press any key to get started!");

// 3 && 6 tracking:
        var wins = 0;
        var losses = 0;
        var guessesLeft = 8; 

    // Placeholder arrays
    guessedLetters = [];
    guessingWord = [];

// <!-- Computer choosing random word -->
var randomWord = words[Math.floor(Math.random() * words.length)];


// 4. Display number of letters when the game starts
    for (var i = 0; i < randomWord.length; i++) {
        guessingWord.push("_");
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

    if (alphabet.indexOf(letter) === -1){

    }

 //translate HTML into JS var and use to manipulate in JS
 var directionsText = document.getElementById("directions-text");
 var userChoiceText = document.getElementById("userguess-text");
 var computerChoiceText = document.getElementById("guessedletters-text");
 var computerChoiceText = document.getElementById("guessedwords-text");
 var computerChoiceText = document.getElementById("guessesleft-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");


            // Hide the directions
            directionsText.textContent = "";

            // Display the user and computer guesses, and wins/losses/ties.
            userChoiceText.textContent = "You chose: " + userGuess;
            computerChoiceText.textContent = "The computer chose: " + computerGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            tiesText.textContent = "ties: " + ties;
          } else {
            directionsText.textContent = "That ain't an r, p or s!!!!"
          }