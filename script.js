let randomizedNumber;
let guessedNumber;

function randomizeNumber() {
    randomizedNumber = Math.floor(Math.random() * 100) + 1;
}
randomizeNumber();
console.log(randomizedNumber);

function getGuessedNumberVal() {
    guessedNumber = Number(document.getElementById("number-input").value);
    checkNumber(guessedNumber);
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
