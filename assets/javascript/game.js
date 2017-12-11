
    // Creates an array that lists the letters from A to Z.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and guesses.
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var numberGuesses = [];

    //Computer chooses a random letter from the array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var reset = function() {
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      guesses = 10;
      numberGuesses = [];
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function() {

      // Determines which key the user presses.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      numberGuesses.push(userGuess);
      // Verify what the computer is guessing.
      console.log("Computer guesses " + computerGuess);
      guesses--;

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if (computerGuess == userGuess){
            wins++;
            reset();
            alert("You win! You must be a Psychic!");
        }
        else if (guesses == 0){
            losses++;
            reset();
            alert("You lose! Try again!");
          } 
        else if (userGuess =! computerGuess) {
            guesses--;
        }


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>The Psychic Game</h1>" +
          "<p><h2>Guess what letter I'm thinking of..</h2></p>" +
          "<br>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guesses + "</p>" +
          "<p>Your guesses so far:  " + numberGuesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };
