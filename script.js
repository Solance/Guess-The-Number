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
    guessedNumbers.push(guessedNumber);
    if (guessedNumbers.length === 1) {
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${guessedNumber},`;
    console.log(guessedNumbers);
    document.getElementById("number-input").value = "";
    document.getElementById("number-input").focus();
    console.log(guessedNumber);
}

function checkNumber(guessedNumber) {
    if (guessedNumber < randomizedNumber) {
        document.getElementById("hint").innerHTML = "The number is too low!";
    } else if (guessedNumber > randomizedNumber) {
        document.getElementById("hint").innerHTML = "The number is too high!";
    } else {
        document.getElementById("hint").innerHTML = "You guessed the number!";
    }
}
