// Assignment Code.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", prompts);

// Write password to the #password input.

function prompts() {
  // Create an alert to greet and give details.
  alert(
    "Hello! This is a random password generator. Please choose in the following boxes what options you wish to include in your password."
  );

  // create preliminary variables.
  var lowercaseOption =
    "Would you like your passowrd to include lowercase characters?";
  var uppercaseOption =
    "Would you like your password to include uppercase characters?";
  var numericOption =
    "Would you like your password to include numeric characters?";
  var specialCharactersOption =
    "Would you like your password to include special characters?";

  // create prompt to ask user to choose a number of characters.
  var lengthChosen = prompt(
    "How long would you like your password to be? Choose a number between 8 and 128 for the total number of characters."
  );
  // Make it halt process if the number of characters is not between 8-128.
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert("Please choose a number between 8 and 128.");

    // If number meets requirements, ask user if they want to include lower case letters.
  } else {
    if (confirm(lowercaseOption) === true) {
      var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    }
    // if they choose not to, characters won't be included.
    else {
      var lowerCaseLetters = "";
    }
    console.log(lowerCaseLetters);

    // ask user if they want to include upper case letters.
    if (confirm(uppercaseOption) === true) {
      var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // if they choose not to, characters won't be included.
    else {
      var uppercaseLetters = "";
    }
    console.log(uppercaseLetters);

    // ask user if they want to include lower case letters.
    if (confirm(numericOption) === true) {
      var numbers = "123456789";
    }
    // if they choose not to, characters won't be included.
    else {
      var numbers = "";
    }
    console.log(numbers);

    // ask user if they want to include lower case letters.
    if (confirm(specialCharactersOption) === true) {
      var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }
    // if they choose not to, characters won't be included.
    else {
      var specialCharacters = "";
    }
    console.log(specialCharacters);
  }
  // consolidate chosen options into one
  chosenOptions = lowerCaseLetters.concat(
    uppercaseLetters,
    numbers,
    specialCharacters
  );

  yourPassword = "";

  console.log(chosenOptions);

  // create loop and randomizer
  for (let i = 0; i < lengthChosen; i++) {
    yourPassword += chosenOptions.charAt(
      Math.floor(Math.random() * chosenOptions.length)
    );
  }
  console.log(yourPassword);

  var password = yourPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
