/*  This JS file was created by Adrian Aquino 
    on January 18, 2022. Completed on January 21, 2022. */

// Prompts the user to enter a number
let maxNumber = prompt("Please enter a max number");

// Continue prompting user until input is neither invalid nor less than 0
while (isNaN(maxNumber) || maxNumber < 0.5) {
    alert("This is an invalid input.");
    maxNumber = prompt("Please enter a max number");
}

// Round user's input to nearest integer
maxNumber = Math.round(maxNumber);

// Randomly generate a number from 1 to user's max
let randomNum = Math.floor(Math.random() * maxNumber) + 1;

// Log the random number to Console
console.log(randomNum);

// Pick up id "range" p element and change to text
let range = document.getElementById("range");
range.innerHTML = "Your range is from 1 to " + maxNumber + " (inclusive)";

let guessCount = []; // Array to keep track of Guesses
const button = document.querySelector('#button'); // ID pickup for button, for later use

// Function on click from Button
function do_guess() {
    // Pick up elements from the document and set to variables
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
    let victory = document.getElementById("victoryLine");
    let lastGuess = document.getElementById("lastGuess");

    //Reset all the messages, useful for when game starts over
    message.innerHTML = "";
    victory.innerHTML = "";
    lastGuess.innerHTML = "";

    if (!isNaN(guess)) { // If guessed number is not a number, make an alert
        if (guess <= maxNumber && guess > 0) { // If guessed number is not in range, make an alert
            guess = Math.round(guess); //Rounds user's guess

            // If guess is in array of guesses, alert
            if (guessCount.indexOf(guess) == -1) {
                guessCount.push(guess); // Add guess to array if not already in it

                // If guess is greater than the random number, update messages 
                if (guess > randomNum) {
                    victory.innerHTML = "";
                    lastGuess.innerHTML = "Your last guess was " + guess;
                    message.innerHTML = "Nope, try a lower number.";
                }

                // If guess is less than the random number, update emssages
                else if (guess < randomNum) {
                    victory.innerHTML = "";
                    lastGuess.innerHTML = "Your last guess was " + guess;
                    message.innerHTML = "Nope, try a higher number.";
                }
            }
            else { // Sends an alert if guess is already used, updates messages
                message.innerHTML = "";
                victory.innerHTML = "";
                alert("You already used this number, not counting this guess.");
            }
        }
        // This ensures that an alert doesn't start when game starts over
        else if (guess == "") {
            message.innerHTML = "";
            victory.innerHTML = "";
            lastGuess = "";
        }
        // Sends an alert if guess is not in range, update messages
        else {
            message.innerHTML = "";
            victory.innerHTML = "";
            lastGuess = "";
            alert("That number is not in range, try again.");
        }
    }
    // Sends an alert if the guess is not a number, update messages
    else {
        message.innerHTML = "";
        victory.innerHTML = "";
        lastGuess = "";
        alert("This is not a number!");
    }
    // If the guess matches the random number, let the user know
    if (guess == randomNum) {
        message.innerHTML = "";
        victory.innerHTML = "You got it!";

        // Added proper grammatical responses based on # of guesses
        if (guessCount.length == 1) {
            alert("You win! \nYou guessed " + guessCount.length + " time. \nYour guess was " + guessCount.join(', ') + ".");
        } else {
            alert("You win! \nYou guessed " + guessCount.length + " times. \nYour guesses were " + guessCount.join(', ') + ".");
        }

        // Disables the button when game ends 
        document.getElementById("btn").disabled = true;

        // Function that asks if user wants to play again after winning
        playAgain();
    }
}
// This function is set if the player wants to play again
function playAgain() {

    // Ask the user if they want to play again after finishing previous game
    if (confirm("Do you want to play again?")) {
        maxNumber = prompt("Please enter a max number"); // New max number

        // Verify new max number
        while (isNaN(maxNumber) || maxNumber < 0.5) {
            alert("This is an invalid input.");
            maxNumber = prompt("Please enter a max number");
        }

        // Round user's input to nearest integer
        maxNumber = Math.round(maxNumber);

        // Randomly generate a new number from 1 to user's max
        randomNum = Math.floor(Math.random() * maxNumber) + 1;

        // Log the new random number to Console
        console.log(randomNum);

        // Update the range line
        range.innerHTML = "Your range is from 1 to " + maxNumber + " (inclusive)";

        // Reset the guess tracker before game starts
        guessCount.length = 0;

        // Enable the button again for use
        document.getElementById("btn").disabled = false;

        // Clear the guess value and any messages
        document.getElementById("guess").value = "";
        document.getElementById("lastGuess").value = "";

        do_guess();
    }
    else {
        alert("Thanks for playing!");
    }
}
