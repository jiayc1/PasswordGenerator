// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get Password Options

function getPasswordOptions () {
  var passwordLength = prompt("Password Length"); // Prompts user for passsword length 
  var passwordLengthInInt = parseInt(passwordLength, 10); // converts object to string Int 
}
  if(isNaN(passwordLengthInInt) === true) { // if the variable is not a number, return this alert to let them know that it needs to be a number 
  alert("Please provide a number for the length of the password");
  return;
  }
