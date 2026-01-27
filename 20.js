// Array Methods - All in One Example

let arr = ['a', 'b', 'c'];

console.log('Initial array:', arr);  // ['a', 'b', 'c']

// 1. push() - Add element(s) at the end
arr.push('d');
console.log('After push("d"):', arr);  // ['a', 'b', 'c', 'd']

// 2. pop() - Remove last element and return it
let popped = arr.pop();
console.log('Popped element:', popped);  // 'd'
console.log('After pop():', arr);         // ['a', 'b', 'c']

// 3. shift() - Remove first element and return it
let shifted = arr.shift();
console.log('Shifted element:', shifted);  // 'a'
console.log('After shift():', arr);         // ['b', 'c']

// 4. unshift() - Add element(s) at the beginning
arr.unshift('x');
console.log('After unshift("x"):', arr);  // ['x', 'b', 'c']

// 5. indexOf() - Find index of an element
console.log('Index of "b":', arr.indexOf('b'));  // 1
console.log('Index of "z":', arr.indexOf('z'));  // -1 (not found)

// 6. includes() - Check if element exists
console.log('Includes "c"?', arr.includes('c')); // true
console.log('Includes "z"?', arr.includes('z')); // false
