// 👍 Default parameter values make functions safer and cleaner.
function greet(name = "Guest") { //👉 Here "Guest" is the default value.
    console.log("Hello " + name);
}

greet("Shafiul");  // Hello Shafiul
greet();           // Hello Guest

// more example

function calculate(price, tax = 5) {
    return price + (price * tax / 100);
}

console.log(calculate(100));      // 105
console.log(calculate(100, 10));  // 110

//Default Parameters in Arrow Functions

const welcome = (name = "User") => {
    return `Welcome ${name}`;
};

console.log(welcome());
