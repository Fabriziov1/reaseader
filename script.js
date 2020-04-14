// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let a = 'blue';
let b = 'red';

console.log(a);
console.log(b);

// INPUT   FUNCTION  OUTPUT


function generatePassword() {

  // TELL YOUR FUNCTION WHAT TO DO 
  // LOOK AT THE FORM / EXTRACT THE INFORMATION
  var passwordForm = document.forms['password-generator-form'];
  var length = passwordForm.passwordLength.value
  var special = passwordForm.special.value
  var uppercase = passwordForm.uppercase.value
  var lowercase = passwordForm.lowercase.value
  var numeric = passwordForm.numeric.value
  console.log(special)

  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // Not all of the special characters
  var specialCharacters = ["!", "#" , "$", "%" , "&" , "()" , "'", "*" , "+", "-"];
  var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9" ,"0"];

  var includedCharacters = [];
  length = parseInt(length);
  
  if (length >= 8 && length <= 128) {
    console.log('password is greater than 8')
    if (special == "yes") {
      includedCharacters = includedCharacters.concat(specialCharacters);
    }
    if (uppercase == "yes") {
      includedCharacters = includedCharacters.concat(uppercaseCharacters);
    }
    if (lowercase == "yes") {
      includedCharacters = includedCharacters.concat(lowercaseCharacters);
    }
    if (numeric == "yes") {
      includedCharacters = includedCharacters.concat(numericCharacters);
    }

    if (includedCharacters.length != 0) {
      console.log('there are included chracters', includedCharacters);
      
      // Create a password that is LENGTH times long  LENGTH = 10
      // We are going to loop LENGTH times 

      // We are going to loop LENGTH times and each time, we are going to RANDOMLY pick a value in the list

      var password = "";
    
     for (let index = 0; index < length; index++) {
       // Pick a random character in the includedCharacters array
       var randomNumber = Math.floor(Math.random() * includedCharacters.length); 
       password = password + includedCharacters[randomNumber];
     } 
    } else {
      return 'Please include some characters'
    }

    return password;

  } else {
    return 'Please select a password length between 8 and 128';
  }
 



}

// Write password to the #password input
function writePassword(e) {
  e.preventDefault();
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





