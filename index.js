var word = require("./Word")
// The file containing the logic for the course of the game, which depends on Word.js and:
var phrase = new Word("Word Here")
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
console.log(phrase.printWord());
