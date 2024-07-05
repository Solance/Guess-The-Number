let randomizedNumber;
let guessedNumber;
let guessedNumbers = [];
const guesses = document.querySelector(".guesses");

function randomizeNumber() {
    randomizedNumber = Math.floor(Math.random() * 100) + 1;
}
randomizeNumber();
console.log(randomizedNumber);

function submitGuessedNumber() {
    guessedNumber = Number(document.getElementById("number-input").value);

    checkNumber(guessedNumber);

    if (guessedNumbers.length === 0) {
        guesses.textContent = "Previous guesses:";
    }

    guesses.textContent =
        guesses.textContent +
        " " +
        (guessedNumbers.includes(guessedNumber) ||
        guessedNumber < 0 ||
        guessedNumber > 100
            ? ""
            : guessedNumber);

    if (
        !guessedNumbers.includes(guessedNumber) &&
        guessedNumber >= 0 &&
        guessedNumber <= 100
    ) {
        guessedNumbers.push(guessedNumber);
        console.log(guessedNumbers);
    }

    document.getElementById("number-input").value = "";
    document.getElementById("number-input").focus();
}

function checkNumber(guessedNumber) {
    if (
        guessedNumbers.length > 8 &&
        guessedNumber != randomizedNumber &&
        !guessedNumbers.includes(guessedNumber)
    ) {
        document.getElementById("hint").innerHTML =
            "You have reached the maximum of 10 guesses! Maybe next time :)";
        gameOver();
    } else if (guessedNumbers.includes(guessedNumber)) {
        document.getElementById("hint").innerHTML =
            "You have already tried that number, please enter a different one!";
    } else if (guessedNumber < 0 || guessedNumber > 100) {
        document.getElementById("hint").innerHTML =
            "Pleasr enter a number between 0 and 100!";
    } else if (guessedNumber < randomizedNumber) {
        document.getElementById("hint").innerHTML = "The number is too low!";
    } else if (guessedNumber > randomizedNumber) {
        document.getElementById("hint").innerHTML = "The number is too high!";
    } else {
        document.getElementById("hint").innerHTML =
            "You guessed the number! Good job!";
        gameOver();
    }
}
function gameOver() {
    console.log("game over!");
    const newGameButton = document.createElement("button");
    newGameButton.className = "new-game-button";
    var newButtonGameText = document.createTextNode("New game");
    newGameButton.appendChild(newButtonGameText);
    document.body.appendChild(newGameButton);
}
