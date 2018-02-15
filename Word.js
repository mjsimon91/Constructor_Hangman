//require Letter.js
require('./Letter.');

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

function Word(gameString){ //gameString is the Phrase that is trying to be guessed
  // An array of new Letter objects representing the letters of the underlying word
  this.lettersInWord = [];
  this.gameString = gameString
  this.guesses = ""
  //Take each letter in the gameString and create an array of objects
  for (var i = 0; i < gameString.length; i++) {
    lettersInWord.push(
      new Letter(word[i], false)
    );
  }
}

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.displayWord = function(){
    if (this.character == ' '){
      // displayLetter = true;
      return ' '
    } else {
      if (this.guessed) {
        return character + " ";
      } else {
        return ' _ '
      }
    }
}

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.characterGuessed = function(key){
  var keyLower = key.toLowerCase();
  if (this.guesses.indexOf(keyLower) == -1) {
    this.guesses += keyLower;
  } else {
    return console.log("You have already guessed this letter!");
  }
};

//Find out if the game has been completed
Word.prototype.gameWon = function(){
  for (var i = 0; i < this.lettersInWord.length; i++) {
    if (this.lettersInWord[i].guessed === false){
      return false
    } else {
      return true
    }
  }
}




//May have a function called displayWord and this may loop through the words and then run displayLetter on each letter
module.exports = Word
