// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", prompts);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function prompts() {
  alert(
    "Hello! This is a random password generator. Please choose in the following boxes what options you wish to include in your password."
  );
  if (confirm(lowercaseOption) === true) {
    lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowerCaseLetters = "";
  }
  console.log(lowerCaseLetters);

  if (confirm(uppercaseOption) === true) {
    uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercaseLetters = "";
  }
  console.log(uppercaseLetters);

  if (confirm(numericOption) === true) {
    numbers = "123456789";
  } else {
    numbers = "";
  }
  console.log(numbers);

  if (confirm(specialCharactersOption) === true) {
    specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  } else {
    specialCharacters = "";
  }
  console.log(specialCharacters);
}

// create arrays and variables for content usage

// Create an alert to greet and give details

// create prompts asking about inclusion of lowercase, uppercase, numeric, and/or special characters
var lengthOption =
  "How long would you like your password to be? Choose a number between 8 and 128 for the total number of characters.";
var lowercaseOption =
  "Would you like your passowrd to include lowercase characters?";
var uppercaseOption =
  "Would you like your password to include uppercase characters?";
var numericOption =
  "Would you like your password to include numeric characters?";
var specialCharactersOption =
  "Would you like your password to include special characters?";

// Create if statements

// create push to store commits inside variable
// create randomizer
// create a loop

// Add event listener to generate button
