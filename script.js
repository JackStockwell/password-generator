// Assignment Code
const slider = document.getElementById("length");
const output = document.getElementById("lengthOutPut")
output.innerText = slider.value

function updateOutput() {
  output.innerText = slider.value
}

var generateBtn = document.querySelector("#generate");


var specialChar = "' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbers = "1234567890".split("");
var lowerCase = "abcdefghijklmnopqrsruvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function generatePassword(useSpecial, useNumbers, useLower, useUpper, length) {
  // Boolean check on parameters, an if statement
  var pswResult = []
  
  if (useSpecial === true) {
    pswResult = pswResult.concat(specialChar)
  }

  if (useNumbers === true) {
    pswResult = pswResult.concat(numbers)
  }
  
  if (useLower === true) {
    pswResult = pswResult.concat(lowerCase)
  }

  if (useUpper === true) {
    pswResult = pswResult.concat(upperCase)
  }


  console.log(pswResult)
  
  var pswString = ""
  for (var i = 0; i < length; i++) {
    pswString += "1"
  }
  return pswString;


  // Have i be the length of the password, everytime i increases add a new character to the a string.


  const specialCharArray = specialChar.split("");
  console.log(specialCharArray)

  const numbersArray = numbers.split("");
  console.log(numbersArray);

  const lowerCaseArray = lowerCase.split("");
  console.log(lowerCaseArray);

  const upperCaseArray = upperCase.split("");
  console.log(upperCaseArray)
}



// Write password to the #password input
function writePassword() {

  var useSpecialElement = document.getElementById("pswSpecialChar")
  var useNumbersElement = document.getElementById("pswNumbers")
  var useLowerElement = document.getElementById("pswLowerCase")
  var useUpperElement = document.getElementById("pswUpperCase")
  var lengthElement = document.getElementById("length")
 
  var password = generatePassword(useSpecialElement.checked, useNumbersElement.checked, useLowerElement.checked, useUpperElement.checked, lengthElement.value)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






var n = 5

function printA(b) {
  console.log(b)
}

printA(10)
printA(n)
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

