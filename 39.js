let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
  }
}


// Example: Sum all elements in 2D array

let sum = 0;

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    sum += matrix[row][col];
  }
}

console.log("Sum of all elements:", sum);
