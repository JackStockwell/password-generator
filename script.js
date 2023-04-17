// Assignment Code
const slider = document.getElementById("length");
const output = document.getElementById("lengthOutPut")
output.innerText = slider.value

function updateOutput() {
  output.innerText = slider.value
}

var generateBtn = document.getElementById("generate");

// Variables of possible characters.

var specialChar = "' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbers = "1234567890".split("");
var lowerCase = "abcdefghijklmnopqrsruvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Generate Password function

function generatePassword(useSpecial, useNumbers, useLower, useUpper, length) {

  // Boolean check on parameters, true statements are complied to an array pswResult.

  var pswResult = []
  
  if (useSpecial === true) {
    pswResult = pswResult.concat(specialChar);
  }

  if (useNumbers === true) {
    pswResult = pswResult.concat(numbers);
  }
  
  if (useLower === true) {
    pswResult = pswResult.concat(lowerCase);
  }

  if (useUpper === true) {
    pswResult = pswResult.concat(upperCase);
  }

  // Ensure the if statements are running correctly.
  // console.log(pswResult)
  
  // Empty String

  var pswString = ""

  // For loop, runs the amount of times of i which will keep running until it reaches the length selected by user.

  for (var i = 0; i < length; i++) {
  // pswString is added upon by an index of pswResult array, the index is calculated using the randomSelector function which has the parameters of 0 and the pswResult array length.
    pswString += pswResult[randomSelector(0, pswResult.length)];
  }
  return pswString;
}

// Math.random function that due to Math.floor will always output a whole integer

function randomSelector(min, max) {
  return Math.floor(Math.random() * (max - min));
}

/* 
The writePassword function will write a password by assigning variables used in the form on the website
it runs the generatePassword function with these parameters.
*/
function writePassword() {

  var useSpecialElement = document.getElementById("pswSpecialChar")
  var useNumbersElement = document.getElementById("pswNumbers")
  var useLowerElement = document.getElementById("pswLowerCase")
  var useUpperElement = document.getElementById("pswUpperCase")
  var lengthElement = document.getElementById("length")

  var password = generatePassword(useSpecialElement.checked, useNumbersElement.checked, useLowerElement.checked, useUpperElement.checked, lengthElement.value)
  var passwordText = document.getElementById("password");

  //Credential Validation - If all values of checkBox are false, will change password to be text in pswUndefined function.

  const checkBox = (useSpecialElement.checked || useNumbersElement.checked || useLowerElement.checked || useUpperElement.checked)

  function pswUndefined(cBox) {
    if (cBox === false) {
      password = ("Please select a conditional!")
    }
  }

  pswUndefined(checkBox)
  
  passwordText.value = password;
}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);