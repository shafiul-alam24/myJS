let text = "  Hello World!  ";

console.log(text.length);             // 15
console.log(text.toUpperCase());      // "  HELLO WORLD!  "
console.log(text.toLowerCase());      // "  hello world!  "
console.log(text.trim());              // "Hello World!"
console.log(text.indexOf("o"));       // 7
console.log(text.includes("World"));  // true
console.log(text.slice(2, 7));        // "Hello"
console.log(text.replace("World", "JS")); // "  Hello JS!  "
console.log(text.split(" "));         // ["", "", "Hello", "World!", "", ""]
console.log(text.charAt(3));          // "H"
console.log(text.startsWith("  He")); // true
console.log(text.endsWith("!  "));    // true
