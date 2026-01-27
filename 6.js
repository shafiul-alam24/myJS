let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333
console.log(a % b);  // 1 (modulus)
// Assignment Operators

let x = 5;
x += 3;   // x = x + 3 → 8
x -= 2;   // x = x - 2 → 6

//Comparison Operators

console.log(5 == '5');   // true (value equality)
console.log(5 === '5');  // false (value and type)
console.log(10 != 5);    // true
console.log(10 > 7);     // true

//Logical Operators

let age = 20;
console.log(age > 18 && age < 30);  // true
console.log(age < 18 || age > 65);  // false
console.log(!(age > 18));            // false
//String Operator
let firstName = "Ali";
let lastName = "Ahmed";
console.log(firstName + " " + lastName);  // "Ali Ahmed"

//Unary Operators
let count = 5;
count++;    // 6
count--;    // 5
console.log(!true);  // false
//Ternary Operator
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // "Yes"

//type of
console.log(typeof 100);      // "number"
console.log(typeof "Hello");  // "string"
console.log(typeof true);     // "boolean"
