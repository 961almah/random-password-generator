// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// create arrays and variables for content usage
var characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  '"',
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Create prompt to greet and give details
// create prompts asking about inclusion of lowercase, uppercase, numeric, and/or special characters
// create push to store commits inside variable
// create randomizer
// create a loop

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
