
    // Creates an array that lists the letters from A to Z.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and guesses.
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var numberGuesses = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function() {

      // Determines which key the user presses.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      numberGuesses.push(userGuess);
      console.log(userGuess);
      console.log(computerGuess);
      guesses--;


      // Randomly chooses a choice from the options array. This is the Computer's guess.
      // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      // Reworked our code from last step to use "else if" instead of lots of if statements.
      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if (computerGuess == userGuess){
            wins++;
            guesses = 10;
            numberGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            alert("You win! You must be a Psychic!");
        }
        else if (guesses == 0){
            losses++;
            guesses = 10;
            numberGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
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
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guesses + "</p>" +
          "<p>Your Guesses so far: " + numberGuesses + " </p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };
