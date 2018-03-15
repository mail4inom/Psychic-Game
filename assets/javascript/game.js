var listOfLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

var wins = 0;
var loss = 0;
var remGuess = 9;
var gussedLetters = [];
document.onkeyup = function (event) {
    var userGuess = event.key;


    var compGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
    gussedLetters.push(userGuess);

    if (compGuess === userGuess) {
        wins++;
    } else {
        remGuess--;
    }
    if (remGuess === 0) {
        loss++ , gussedLetters = [], remGuess = 9;
    }else if(wins != 1){
        wins = 0, loss = 0, gussedLetters = [], remGuess = 9;
    } 
    var html =

        "<h3>Guess what letter I'm thinkin of</h3>" +
        "<h3>wins: " + wins + "</h3>" +
        "<h3>Losses: " + loss + "</h3>" +
        "<h3>Guesses left: " + remGuess + "</h3>" +
        "<h3>You Guesses so far: " + gussedLetters + "</h3>";
    document.getElementById("game").innerHTML = html;
};