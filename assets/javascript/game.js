var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var userGuess = null;

var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guesses + " Computer picked: " + letterToBeGuessed);


document.onkeyup = function(event) {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (guesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		guesses[guesses.length]=userGuess;
		guessesLeft--;
	}
	
	if (letterToBeGuessed == userGuess) {
		wins++;
		alert("You won!");
		guessesLeft = 10;
		guesses = [];
		letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guesses + " Computer picked: " + letterToBeGuessed);
	}
	
	if (guessesLeft == 0) {
		losses++;
		alert("You lost!");
		guessesLeft = 10;
		guesses = [];
		letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guesses + " Computer picked: " + letterToBeGuessed);
	}

	
	var html = 
		"<p><h1>The Psychic Game</h1></p>" + 
		"<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
		"<p><h4>Wins: " +
		wins + 
		"</h4></p>" + 
		"<p><h4>Losses: " + 
		losses + 
		"</h4></p>" + 
		"<p><h4>Guesses Left: " + 
		guessesLeft + 
		"</h4></p>" + 
		"<p><h4>Your guesses so far: " + 
		guesses + 
		"</h4></p>";

	document.querySelector("#game").innerHTML = html;

}