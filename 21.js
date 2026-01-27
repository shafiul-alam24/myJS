// Array Methods - All in One Example

let arr = ['a', 'b', 'c'];
console.log('Initial array:', arr);  // ['a', 'b', 'c']

// Part 1 Methods

// push() - Add element(s) at the end
arr.push('d');
console.log('After push("d"):', arr);  // ['a', 'b', 'c', 'd']

// pop() - Remove last element and return it
let popped = arr.pop();
console.log('Popped element:', popped);  // 'd'
console.log('After pop():', arr);         // ['a', 'b', 'c']

// shift() - Remove first element and return it
let shifted = arr.shift();
console.log('Shifted element:', shifted);  // 'a'
console.log('After shift():', arr);         // ['b', 'c']

// unshift() - Add element(s) at the beginning
arr.unshift('x');
console.log('After unshift("x"):', arr);  // ['x', 'b', 'c']

// indexOf() - Find index of an element
console.log('Index of "b":', arr.indexOf('b'));  // 1
console.log('Index of "z":', arr.indexOf('z'));  // -1 (not found)

// includes() - Check if element exists
console.log('Includes "c"?', arr.includes('c')); // true
console.log('Includes "z"?', arr.includes('z')); // false

// Part 2 Methods

// slice(start, end) - Extract a portion of array (non-inclusive end)
let arr2 = [10, 20, 30, 40, 50];
let sliced = arr2.slice(1, 4);
console.log('Slice (1,4):', sliced);  // [20, 30, 40]

// splice(start, deleteCount, ...items) - Add/remove elements
let splicedArray = [...arr2]; // clone to avoid modifying arr2
let removed = splicedArray.splice(1, 2);
console.log('Removed elements:', removed);   // [20, 30]
console.log('After removal:', splicedArray); // [10, 40, 50]

splicedArray.splice(1, 0, 25, 35);
console.log('After insertion:', splicedArray); // [10, 25, 35, 40, 50]

splicedArray.splice(2, 1, 33);
console.log('After replace:', splicedArray); // [10, 25, 33, 40, 50]

// join(separator) - Join array elements into a string
let joined = arr.join('-');
console.log('Joined with "-":', joined);  // "x-b-c"

// forEach(callback) - Execute a function for each element
console.log('forEach output:');
arr.forEach((el, i) => {
  console.log(`Index ${i}: ${el}`);
});

// map(callback) - Create new array by transforming elements
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);  // [2, 4, 6]

// filter(callback) - Filter elements based on condition
let filtered = numbers.filter(n => n > 1);
console.log('Filtered > 1:', filtered);  // [2, 3]
