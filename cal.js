const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // standard input stream
  output: process.stdout // standard output stream 
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return 'Error: Division by zero!';
      return num1 / num2;
    case '%':
      if (num2 === 0) return 'Error: Division by zero!';
      return num1 % num2;
    default:
      return 'Invalid operator!';
  }
}

rl.question('Enter first number: ', (input1) => {
  const num1 = Number(input1);
  if (isNaN(num1)) {
    console.log('Invalid number!');
    rl.close();
    return;
  }

  rl.question('Enter second number: ', (input2) => {
    const num2 = Number(input2);
    if (isNaN(num2)) {
      console.log('Invalid number!');
      rl.close();
      return;
    }

    rl.question('Enter operator (+, -, *, /, %): ', (operator) => {
      const result = calculate(num1, num2, operator.trim());
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
