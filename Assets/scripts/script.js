// Assignment Code
let generateBtn = document.querySelector("#generateBtn");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#passwordFld");
  passwordText.value = password;
}

let pw;

/* Generate password */
let generatePassword = function(){
    
    // substantiate password
    let pw = '';
    
    // check password length criteria
    let passwordLength = prompt("How long do you want your password to be (choose between 8 and 128 characters)?");
    passwordLength = Number(passwordLength);

    // Loop on correct number of characters or no password entered
    let correctNumOfChars = false;
    while ( correctNumOfChars === false ) {
        
        if ( passwordLength < 8 || passwordLength > 128 ) {
            passwordLength = prompt("Try again. How long do you want your password to be (choose between 8 and 128 characters)?");
            correctNumOfChars = false;
        } else {
            correctNumOfChars = true;
        }

    }

    // check password character criteria
    let passwordOptionsChoice = false;
    let passwordLowerCase = confirm("Do you want lowercase letters?");
    let passwordUpperCase = confirm("Do you want uppercase letters?");
    let passwordNumeric = confirm("Do you want numbers?");
    let passwordSpecChars = confirm("Do you want special characters?");
    while ( passwordOptionsChoice === false ) {
        passwordOptionsChoice = true;
        if (!passwordLowerCase && !passwordUpperCase && !passwordNumeric && !passwordSpecChars) {
            alert("Choose at least one type of character.");
            passwordOptionsChoice = false;
        }
    }
    
    // reset password options 
    let pwOptions = '';

    // add character options according to confirm methods above
    if (passwordLowerCase) {
        pwOptions += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordUpperCase) {
        pwOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordNumeric) {
        pwOptions += "1234567890";
    }
    if (passwordSpecChars) {
        pwOptions += "()\`~!@#$%^&*-+=|\{}[]:;\"'<>,.?/";
    }

    // generate from options and length
    for (let i = 0; i <= passwordLength-1; i++) {
        let randomNum = Math.floor(Math.random() * pwOptions.length);
        pw += pwOptions.substring(randomNum, randomNum + 1);
    }
        
    // return password to writePassword()
    return pw;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Copy to Clipboard 

let copyToClipboard = function() {
    let passwordField = document.querySelector("#passwordFld");
    passwordField.select();
    passwordField.setSelectionRange(0, 128);
    navigator.clipboard.writeText(passwordField.value);
}

// Get Copy to Clipboard button

copyToClipboardBtn = document.querySelector("#copyToClipboardBtn");

// Add listener to copy button

copyToClipboardBtn.addEventListener("click", copyToClipboard);
