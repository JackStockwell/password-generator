// Assignment Code
const slider = document.getElementById("Length");
const output = document.getElementById("lengthOutPut")
output.innerText = slider.value

function updateOutput() {
  output.innerText = slider.value
}

var generateBtn = document.querySelector("#generate");


var specialChar = "' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrsruvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const specialCharArray = specialChar.split("");
console.log(specialCharArray)

const numbersArray = numbers.split("");
console.log(numbersArray);

const lowerCaseArray = lowerCase.split("");
console.log(lowerCaseArray);

const upperCaseArray = upperCase.split("");
console.log(upperCaseArray)






var PSW = specialCharArray.concat(numbersArray, lowerCaseArray, upperCaseArray);
console.log(PSW);



function generatePassword(useSpecial, useNumbers, useLower, useUpper, pswLength) {

}

// Write password to the #password input
function writePassword() {
  var useSpecial = document.getElementById("pswSpecialChar")
  var useNumbers = document

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

