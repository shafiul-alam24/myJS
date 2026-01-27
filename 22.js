// ======= Array Sorting Examples =======

// 1. Sorting strings (alphabetical order)
let fruits = ['banana', 'apple', 'cherry', 'date'];
console.log('Original fruits:', fruits);

fruits.sort();
console.log('Sorted fruits:', fruits);  // ['apple', 'banana', 'cherry', 'date']

// 2. Sorting numbers (default behavior - WRONG for numbers)
let numbers = [10, 5, 100, 1];
console.log('\nOriginal numbers:', numbers);

numbers.sort();
console.log('Numbers sorted by default (lex order):', numbers);  // [1, 10, 100, 5]

// 3. Sorting numbers correctly - ascending
numbers.sort((a, b) => a - b);
console.log('Numbers sorted ascending:', numbers);  // [1, 5, 10, 100]

// 4. Sorting numbers descending
numbers.sort((a, b) => b - a);
console.log('Numbers sorted descending:', numbers);  // [100, 10, 5, 1]

// 5. Sorting objects by a numeric property
let students = [
  {name: "Ali", age: 15},
  {name: "Sara", age: 14},
  {name: "John", age: 16},
];

console.log('\nOriginal students:', students);

students.sort((a, b) => a.age - b.age);
console.log('Students sorted by age ascending:', students)
