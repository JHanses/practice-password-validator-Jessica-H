//Load readline-sync to get user input

const readlineSync = require('readline-sync');

let valid = false; // Identifies whether the password meets all requirements
  // Start with false because no password has been entered yet

//Loop until the password is valid
while (!valid) { // !valid means "not valid" so the loop keeps running until the password becomes valid
  // Ask the user to enter a password
  let password = readlineSync.question("Enter a password: ");

  // Check each requirement
  let hasUppercase = false;
  let hasNumber = false;

for (let i = 0; i < password.length; i++) {
  let char = password[i]; // for loop goes through each character of the password
  // i is the index starting at 0
  // password[i] gives us the character at position i

  // Check if character is uppercase
  if (char >= 'A' && char <= 'Z') {
    hasUppercase = true;
  }
  // Check if character has a number
  if (char >= '0' && char <= '9') {
    hasNumber = true;
  }
}

// Check all conditions
if (password.length >= 8 && hasUppercase && hasNumber) {
  console.log("Success! Your password meets all the requirements.");
  valid = true; // Exit the loop
} else {
  console.log("Password does not meet the requirement. Try again.");
  }
}


