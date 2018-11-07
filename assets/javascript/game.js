//1. Use key events to listen for the letters that your players will type.
//2. Display the following on the page:Press any key to get started!
//3. Track Wins: (# of times user guessed the word correctly).
//4. If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//5. As the user guesses the correct letters, reveal them: m a d o _  _ a.
//6. Number of Guesses Remaining: (# of guesses remaining for the user).
//7. Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
//8. After the user wins/loses the game should automatically choose another word and make the user play it. -->





var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
        var words = ['cat', 'tree','bark', 'defiant', 'moses', 'language', "chrysanthemum"]
        var guessesLeft = 8; 
        var userGuess = "";

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

// <!-- Computer choosing random word -->
var randomWord = words[Math.floor(Math.random() * words.length)];

//1. Use key events to listen for the letters that your players will type.
    document.onkeyup = function(event) {
    var userGuess = event.key;
}

// //2. Display the following on the page:Press any key to get started!

alert("Press any key to get started");


    // Build the guessing word and clear it out
    // Create letter slots for each letter of the random word
    for (var i = 0; i < randomWord.length; i++) {
        guessingWord.push("_");
    }

// <!-- // This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === letter) {
            positions.push(i);

            // ^pushing the indicies
        }
    }

    // if there are no indicies( positions arr length less than or equal to 0)
    //  remove a guess 

    if (positions.length <= 0) {
        guessesLeft--;

    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}; 



words.forEach(function(element){
    if (words === element){
        return 
    }
})

// <!-- function that will delete userGuess from letters array -->

function deleteMatch(letter){
    alphabet.forEach(function(i){
        if(letter === i){
            delete i;
        }
    })
}





        var match = array1.find(function(element) {
  return element > 10;
});

// <!-- word is placed on screen -->
// <!-- Lets pretend word is "bark" -->
// <!-- user picks a letter "a" -->


function matchGuessToLetter(letter){
   .forEach(function(letter){
       if(userGuess === letter){

       }
   }) if (userGuess === )
}

// <!-- filter thru the word to see if theres a matching letter -->



// <!-- function that removes choice from array of letters -->
        function removeLetterChoice(letter){
            letters.filter()
            if ( userguess === )
        }


// <!-- filter thru array to see if there's a match, if Y delete ltr from array
    // If N,  -->
var newLetters = letters.filter(function(letter){
    return userGuess === letter;
})

// <!-- user choice event key  -->
    document.onkeyup = function(event) {
        var userGuess = event.key;
    }
// <!-- computer random choice of word -->

    var compChoice = words[Math.floor(Math.random() * array.length)];

// <!-- Comparison -->

    if (userGuess === "r" && compChoice === "p") || (userGuess === "s" && compChoice === "r") || (userGuess === "p" && compChoice === "s"){
    losses++;
    }
    else if (userGuess === compChoice){
    ties++;
    }
    else {
    wins++;
    }