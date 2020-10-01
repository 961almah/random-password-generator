// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Create prompt to greet and give details
// create prompts asking about inclusion of lowercase, uppercase, numeric, and/or special characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
