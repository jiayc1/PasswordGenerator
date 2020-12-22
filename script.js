// Password Generator 

// Special Characters Array 
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',
  ':',',',')','(','}','{',']','[','~','-','_',
  '.'
];

// Numeric characters Array 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase characters Array 
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Uppercase Characetrs Array 
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var passwordOptions = getPasswordOptions();

  var results = [];
  var guaranteeChars = [];
  var forSureChars = [];

  if(passwordOptions.hasSpecialCharacters === true) {

    forSureChars = forSureChars.concat(specialCharacters);
    guaranteeChars.push(specialCharacters[getRandom(specialCharacters.length)]);
  }

  if(passwordOptions.hasNumericCharacters === true) {
    forSureChars = forSureChars.concat(numericCharacters);
    guaranteeChars.push(numericCharacters[getRandom(numericCharacters.length)]);
  }
  if(passwordOptions.hasLowerCasedCharacters === true) {
    forSureChars = forSureChars.concat(lowerCasedCharacters);
    guaranteeChars.push(lowerCasedCharacters[getRandom(lowerCasedCharacters.length)]);
  }
  if(passwordOptions.hasUpperCasedCharacters === true) {
    forSureChars = forSureChars.concat(upperCasedCharacters);
    guaranteeChars.push(upperCasedCharacters[getRandom(upperCasedCharacters.length)]);
  }
  
  for(var i = 0; i < passwordOptions.length; i++) {

    results.push(forSureChars[getRandom(forSureChars.length)]);

  }

  for(var j = 0; j < guaranteeChars.length; j++) {
    results[j] = guaranteeChars[j];
  }

  return results.join('');
  
}
  
//Get Password Options

 function getPasswordOptions () {
  var passwordLength = prompt("Password Length"); // Prompts user for passsword length 
  var passwordLengthInInt = parseInt(passwordLength, 10); // converts object to string Int 
  
  if(isNaN(passwordLengthInInt) === true) { // if the variable is not a number, return this alert to let them know that it needs to be a number 
  alert("Please provide a number for the length of the password");
  return;
  }


  if(passwordLengthInInt < 8) { // This sets a minimum of at least 8 to the password length
  alert("Please enter a number to at least 8")
  return; 
  }


  if(passwordLengthInInt > 128) { // set the max length to 128 
  alert("The max is 128, please don't go over 128")
  return;
  }

  var isAllowLowercase = confirm("Allow Lowercases?");
  var isAllowUpper = confirm("Allow Uppercases?");
  var isAllowNumbers = confirm("Allow Numbers?");
  var isAllowSpecialChar = confirm("Allow Characters?");

  if(isAllowLowercase === false && isAllowUpper === false &&
    isAllowNumbers === false && isAllowSpecialChar === false) {

      alert("You will need to select one");
      return; 
  }
  // storing smaller variables into a big variable
  var passwordOptions = {
    length: passwordLengthInInt,
    hasSpecialCharacters: isAllowSpecialChar,
    hasNumericCharacters: isAllowNumbers,
    hasLowerCasedCharacters: isAllowLowercase,
    hasUpperCasedCharacters: isAllowUpper
  };

  return passwordOptions;
}


function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
  
