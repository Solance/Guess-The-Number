let randomizedNumber;
let guessedNumber;

function getGuessedNumberVal() {
    guessedNumber = document.getElementById("number-input").value;
    console.log(guessedNumber);
}

function randomizeNumber() {
    randomizedNumber = Math.floor(Math.random() * 100) + 1;
}

randomizeNumber();
console.log(randomizedNumber);
