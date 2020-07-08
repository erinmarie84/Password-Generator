function generate (){

  var lowercase = 'abcdefghijklmnopqrstuvxwyz'
  var uppercase = 'ABCDEFGH'
  var numbers = '0123'
  var special characters = '!'

  var lowercase

  var userpassword = '';
  var passwordCharset = '';

  if (lowercaseInput.checked) {

  }

  for (var i = 0; i < passlenght; i++) {
    userpassword += passwordCharset.charAt(Math.floor(Math.random() *)
  }

  document.getElementById
}


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
