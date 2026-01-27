const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a year: ', (input) => {
  const year = Number(input);

  if (isNaN(year) || year <= 0) {
    console.log('Please enter a valid positive year.');
  } else {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is NOT a leap year.`);
    }
  }

  rl.close();
});
