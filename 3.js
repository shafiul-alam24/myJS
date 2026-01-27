let age = 25;               // Number
let name = "Shafiul";       // String
let isStudent = true;       // Boolean
let address;                // Undefined (no value yet)
let phone = null;           // Null (intentionally empty)
let student = {             // Object
  name: "Ali",
  age: 15
};
let numbers = [10, 20, 30]; // Array
console.log(age);                // 25
console.log(typeof age);         // number

console.log(name);               // Shafiul
console.log(typeof name);        // string

console.log(isStudent);          // true
console.log(typeof isStudent);   // boolean

console.log(address);            // undefined
console.log(typeof address);     // undefined

console.log(phone);              // null
console.log(typeof phone);       // object (this is a known quirk in JS)

console.log(student);            // { name: "Ali", age: 15 }
console.log(typeof student);     // object

console.log(numbers);            // [10, 20, 30]
console.log(typeof numbers);     // object
