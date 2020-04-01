
//create variables to store all the letters,numbers, and special charaters
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";




// Grab a reference to the button element
var generateBtn = document.querySelector("#generate");

//Create a function that generate a password 

function generatePassword() {


  // initialize a variable that will be used to randomly extract symbols from.
  var symbols;
  // set variable for the number of characters
  var num = "not a number";
  //Initialize a variable to store password
  var pass = "";
  



  //Start a while loop until some parameters are chosen
  while(symbols == null) {

    //ask the user if they want to use lower case letters
    if (confirm("Would you like to include lower case letters?")) {

      symbols += lower;
      
    }
    //ask the user if they want to use upper case letters
    if (confirm("Would you like to include upper case letters?")) {

      symbols += upper;
      
    }
    //ask the user if they want to use numbers
    if (confirm("Would you like to include numbers?")) {

      symbols += numbers;
      
    }
    //ask the user if they want to use special characters
    if (confirm("Would you like to include special characters?")) {

      symbols += special;
      
    }
    //  If necessary prompts the user to pick something and restarts.
if (symbols == null) {
    alert("You must choose at least one type of characters!")};

  }


    //ask the usere how many characters should the password be
    //If the input doesn't match parameters, the prmpt is repeated.
    while (isNaN(num) || num < 8 || num > 128) {

      num = prompt("How many characters long should your password be? \nEnter a number between 8 and 128:");

    }

    //start a loop as long as the characters needed

    for(var x = 0; x < num; x++) {
      //create a variable to store a random number between 0 and the length of the number of usable characters.
      var randomNumber = Math.floor(Math.random() * symbols.length);
      //Add the character at the index randomly generated
      pass += symbols[randomNumber];

    }

    return pass;

}


//Create a function that calls thegeneratePassword() and displays the result on the textarea
function writePassword() {

  document.body.style.background = "hsl(360, 91% , 36%);";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  document.body.style.background = "forestgreen";
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






