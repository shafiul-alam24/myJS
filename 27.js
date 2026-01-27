let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// 2 example more

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive.");
} else if (age >= 18 && !hasLicense) {
  console.log("You need a license to drive.");
} else {
  console.log("You are too young to drive.");
}
