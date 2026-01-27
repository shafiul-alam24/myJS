let num = 123;
let str = num.toString();    // Common and explicit
console.log(str);           // "123"
console.log(typeof str);    // "string"
//2 Using String() Function
let num1 = 456;
let str1 = String(num);  // Converts any value to string
console.log(str);           // "456"
console.log(typeof str);    // "string"
// 3. Using Template Literals (Backticks)

let num2 = 789;
let str2 = `${num}`;  // Useful in string interpolation
console.log(str);           // "789"
console.log(typeof str);    // "string"
// Using Concatenation with Empty String
let num3 = 100;
let str3 = num + "";
console.log(str);           // "100"
console.log(typeof str);    // "string"
