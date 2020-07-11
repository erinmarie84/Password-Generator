// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var charNum= prompt('How many characters do you want your password to use?');
  // Verify how many characters user wants and start over if they choose too many or too little characters
  if(charNum <8 || charNum >128){
    return writePassword();
  }

  // Create variables to store users input/answers

  var uppercase = confirm('Do you want to include uppercase characters?');
  var lowercase = confirm('Do you want to include lowercase characters?');
  var numbers = confirm('Do you want to include numbers?');
  var specialChar = confirm('Do you want special characters?');

  // Create array's for each variable to pull from

  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var specialCharArray = ['!', '"','#', '$', '%', '&', '(',')','*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  // Create empty array to hold users chosen characters

  var emptyArray = [];

  if(uppercase) {
    emptyArray.push(...upperArray);
  } 

  if(lowercase) {
    emptyArray.push(...lowerArray);
  }

  if(numbers) {
    emptyArray.push (...numbersArray);
  }

  if(specialChar) {
    emptyArray.push (...specialCharArray);
  }

 // Create variable to push the password into

  var passArray = [];

  // Create for loop with math.floor so that the computer will only choose the number of characters that the user chose and ramdomly pick the characters and put that information into the second empty array.

  for(let i = 0; i < charNum; i++){
    passArray.push(emptyArray[Math.floor(Math.random() * emptyArray.length)]);
  
  }

  // Create a placeholder variable attachted to an html element

  var securePassBox = document.getElementById('password');

  // Use .value so that the computer puts the information from passArray into the generate password box

  securePassBox.value = passArray.join(''); 
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
