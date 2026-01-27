let numbers = [10, 20, 30];

// Add 40 at the end
numbers.push(40);  // [10, 20, 30, 40]

// Remove first element
let first = numbers.shift();  // first = 10, numbers = [20, 30, 40]

// Find index of 30
let idx = numbers.indexOf(30);  // 1

// Loop through numbers and print
numbers.forEach((num) => {
  console.log(num);
});
