let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName);  // Output: Wednesday

// Grade example

let grade = 'B';

switch (grade) {
  case 'A':
    console.log("Excellent");
  case 'B':
    console.log("Good");
  case 'C':
    console.log("Average");
    break;
  default:
    console.log("Unknown grade");
}
