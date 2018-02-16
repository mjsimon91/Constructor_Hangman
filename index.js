var Word = require("./Word")
var inquirer = require("inquirer");
var letterGuessed;
var phrases = ["abaya","absquatulate","bumbo","erf","natation","sesquipedalian","If opportunity doesn't knock, build a door"]
var selectedWord = phrases[Math.floor(Math.random()* phrases.length)]
var currentWord = selectedWord.toUpperCase();

var myWord = new Word(currentWord);
var maxGuesses = 10;



// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
console.log(myWord.displayWord());
