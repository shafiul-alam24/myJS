console.log(5 << 1);  // 10  (5 * 2^1)
console.log(3 << 2);  // 12  (3 * 2^2)
// Each left shift multiplies the number by 2.

console.log(10 >> 1); // 5  (10 / 2^1) Right Shift
console.log(20 >> 2); // 5  (20 / 2^2)
// Each right shift divides the number by 2 (floor).

//programmi

let color = 0xFF3366CC;  // ARGB color value

let alpha = (color >> 24) & 0xFF;  // Extract alpha byte
let red   = (color >> 16) & 0xFF;  // Extract red byte
let green = (color >> 8)  & 0xFF;  // Extract green byte
let blue  = color & 0xFF;           // Extract blue byte

console.log(alpha, red, green, blue); // 255 51 102 204
