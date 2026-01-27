let age = 25;
let hasID = true;

console.log(age > 18 && hasID);    // true (both conditions true)
console.log(age < 18 && hasID);    // false (first condition false)
console.log(age > 18 || hasID);    // true (either condition true)
console.log(!hasID);               // false (inverts true)
console.log(!(age > 18));          // false (inverts true)
//practical

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}
