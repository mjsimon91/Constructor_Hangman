var lettersGuessed = [];

// var displayLetter = false;

// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(character,guessed){
// A string value to store the underlying character for the letter
  this.character = character;
// A boolean value that stores whether that letter has been guessed yet
  this.guessed = guessed;
}
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// Letter.prototype.checkLetter = function(character){
//   if (character == this.character) {
//     this.guessed = true;
//     this.character = this.displayCharacter()
//   }
// }

module.exports = Letter;

//Look at each letter and see if there is a character in the place or space (DisplayCharacter)
