const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student score (0-100): ', (input) => {
  let score = Number(input);

  if (isNaN(score) || score < 0 || score > 100) {
    console.log('Invalid score! Please enter a number between 0 and 100.');
  } else {
    let grade, message;

    if (score >= 90) {
      grade = 'A+';
      message = 'Excellent!';
    } else if (score >= 80) {
      grade = 'A';
      message = 'Very Good!';
    } else if (score >= 70) {
      grade = 'B';
      message = 'Good!';
    } else if (score >= 60) {
      grade = 'C';
      message = 'Need Improvement';
    } else if (score >= 50) {
      grade = 'D';
      message = 'Passed';
    } else {
      grade = 'F';
      message = 'Failed';
    }

    console.log(`Grade: ${grade}`);
    console.log(`Message: ${message}`);
  }

  rl.close();
});
