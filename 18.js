
/*
let input = prompt("Enter a decimal number:");
let number = parseFloat(input);

if (!isNaN(number)) {
  console.log("You entered the decimal number:", number);
} else {
  console.log("Invalid decimal number!");
}


*/


// for for 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  let number = Number(input);
  
  if (!isNaN(number)) {
    console.log('You entered the number:', number);
  } else {
    console.log('Invalid number!');
  }
  
  rl.close();
});
