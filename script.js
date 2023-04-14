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


var pswLength = window.prompt("Please specify the length of your password", "8 to 128 characters long");

generateBtn.addEventListener("click", )

if (pswLength > 8 && pswLength < 128) {
  console.log("Well done!");
} else {
  pswLength = alert("Password must be between 8 to 128 characters long");
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

