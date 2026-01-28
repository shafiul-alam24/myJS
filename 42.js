// Function in real life
//Input: Dirty clothes > Process: Washing >> Output: Clean clothes
// f(x)=x+2 > If x=3, then f(3) >> =5

function add(a, b) {  // a, b → parameters (Parameters = placeholders)
    return a + b;
}
    let result = add(5, 3);  // 5, 3 → arguments (Arguments = real values)
console.log(result);

// more example

function calculateArea(length, width) {
    return length * width; // 👉 When return runs, the function stops executing.
}

console.log(calculateArea(10, 5));

