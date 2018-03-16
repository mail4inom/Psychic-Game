var listOfLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var loss = 0;
var remGuess = 9;
var guessedLetters = [];
var startGame = false;
document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    if (!startGame && userGuess === " ") {
        startGame = true;
        showstats();
    } else if (startGame) {
        if (listOfLetters.includes(userGuess)) {
            var compGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];

            guessedLetters.push(userGuess);


            if (compGuess === userGuess) {
                wins++ , guessedLetters = [], remGuess = 9;
            } else {
                remGuess--;
            }
            if (remGuess === 0) {
                loss++ , guessedLetters = [], remGuess = 9;
            } 
            if (wins === 3) {
                alert("Congratulations, You won!!! ");
                startGame = false;
                reset()
            }
            showstats();
        }
    }
};
function showstats() {
    var html =

        "<h3>Guess what letter I'm thinkin of</h3>" +
        "<h5>Wins: " + wins + "</h5>" +
        "<h3>Losses: " + loss + "</h3>" +
        "<h3>Guesses left: " + remGuess + "</h3>" +
        "<h3>You Guesses so far: " + guessedLetters + "</h3>";
    document.getElementById("game").innerHTML = html;
};
function reset() {
    wins = 0;
    loss = 0;
    remGuess = 9;
    guessedLetters = [];
    startGame = false;
}