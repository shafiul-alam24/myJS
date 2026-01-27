for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;  // Skip this iteration if i is even
  }
  console.log(i);  // Prints only odd numbers: 1, 3, 5
}

// Example: Stop loop when number is 3
  console.log("--------------------------------"); 
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;  // Exit the loop completely
  }
  console.log(i);  // Prints 1, 2 then stops
}
