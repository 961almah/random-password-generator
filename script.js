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
  // Create an alert to greet and give details
  alert(
    "Hello! This is a random password generator. Please choose in the following boxes what options you wish to include in your password."
  );

  // create prompts asking about inclusion of lowercase, uppercase, numeric, and/or special characters

  var lowercaseOption =
    "Would you like your passowrd to include lowercase characters?";
  var uppercaseOption =
    "Would you like your password to include uppercase characters?";
  var numericOption =
    "Would you like your password to include numeric characters?";
  var specialCharactersOption =
    "Would you like your password to include special characters?";

  // create if statement to determine value of lower case letters

  var lengthChosen = prompt(
    "How long would you like your password to be? Choose a number between 8 and 128 for the total number of characters."
  );
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert("Please choose a number between 8 and 128.");
  } else {
    if (confirm(lowercaseOption) === true) {
      var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    } else {
      var lowerCaseLetters = "";
    }
    console.log(lowerCaseLetters);

    // create if statement to determine value of upper case letters
    if (confirm(uppercaseOption) === true) {
      var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      var uppercaseLetters = "";
    }
    console.log(uppercaseLetters);

    // create statement to determine value of numbers
    if (confirm(numericOption) === true) {
      var numbers = "123456789";
    } else {
      var numbers = "";
    }
    console.log(numbers);

    // create if statment to determine value of special characters
    if (confirm(specialCharactersOption) === true) {
      var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    } else {
      var specialCharacters = "";
    }
    console.log(specialCharacters);
  }

  chosenOptions = lowerCaseLetters.concat(
    uppercaseLetters,
    numerics,
    specialCharacters
  );
}
// create push to store commits inside variable
// create randomizer
// create a loop

// Add event listener to generate button
