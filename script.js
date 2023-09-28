var numChar = 8;
var options = [];
var specialCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var alphaUpperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArray = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  //getInput();  //returns true or false (from video)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
//Generate password based on prompts
  getInput()
  //create array with all possible optons



return password; 

}

function getInput(){ //function for obtaining the user's input
  options = [];
  numChar = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

  if (isNaN(numChar) || numChar < 8 || numChar > 128) {   ///hoping these are all false
    alert("Must be a number from 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    options = options.concat(alphaLowerArr);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    options = options.concat(alphaUpperArr);
  }

  if (confirm("Would you like numbers in your password?")) {
    options = options.concat(numArray);
  }

  if (confirm("Would you like special characters in your password?")) {
    options = options.concat(specialCharArr);
  }

  return true;
}