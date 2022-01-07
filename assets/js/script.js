let generateBtn = document.querySelector("#generate");

// Create an array of lower and capitalize letters
let lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Create an array of Numbers
let allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Create and array of Special Characters
let specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  "<",
  ">",
];

function generatePassword() {
  var pwVault = [];
  var pwActive = [];
  var pwLength = prompt(
    "How long would you like your password to be? Max: 128 Min: 8"
  );
  console.log(pwActive);
  if (pwLength < 8 || pwLength > 128) {
    alert("Choose a password between 8 and 128 characters!");
    return null;
  } else {
    let usespecialChars = confirm("Would you like special characters?");
    let uselcLetters = confirm("Would you like lowercase letters?");
    let useucLetters = confirm("Would you like uppercase letters?");
    let useallNumbers = confirm("Would you like numbers?");
    if (uselcLetters === true) {
      console.log("uselcLetters is true");
      pwVault = pwVault.concat(lcLetters);
      let randomItem = lcLetters[Math.floor(Math.random() * lcLetters.length)];

      pwActive.push(randomItem);
    }

    if (useucLetters === true) {
      console.log("useucLetters is true");
      pwVault = pwVault.concat(ucLetters);
      let randomItem = ucLetters[Math.floor(Math.random() * ucLetters.length)];
      pwActive.push(randomItem);
    }

    if (useallNumbers === true) {
      console.log("useallNumbers is true");
      pwVault = pwVault.concat(allNumbers);
      let randomItem =
        allNumbers[Math.floor(Math.random() * allNumbers.length)];
      pwActive.push(randomItem);
    }

    if (usespecialChars === true) {
      console.log("usespecialChars is true");
      pwVault = pwVault.concat(specialChars);
      let randomItem =
        specialChars[Math.floor(Math.random() * specialChars.length)];
      pwActive.push(randomItem);
    }
    console.log(pwActive);
    console.log(pwVault);
    if (
      uselcLetters === false &&
      useucLetters === false &&
      useallNumbers === false &&
      usespecialChars === false
    ) {
      alert("Please Pick One Criteria!");
      return null;
    } else {
      let initialPassLength = pwLength - pwActive.length;
      for (let i = 0; i < initialPassLength; i++) {
        let randomItem = pwVault[Math.floor(Math.random() * pwVault.length)];
        pwActive.push(`${randomItem}`);
      }
      console.log("we are in the else");
    }
  }
  return pwActive.join("");
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
