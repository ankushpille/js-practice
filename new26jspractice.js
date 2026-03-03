var a = 10;

console.log(a); // Output: 10
a = 20;
console.log(a); // Output: 20
var a = 30; // Redeclaring 'a' is allowed with 'var'
console.log(a); // Output: 30

//let b = 10; // This will throw an error because 'b' is not declared with 'let'
let b = 10;
console.log(b); // Output: 10
b = 20;
console.log("let b:", b); // Output: 20

//const c = 10; // This will throw an error because 'c' is not declared with 'const'
const c = 10;
console.log(c); // Output: 10
// c = 20; //this will throw an error
