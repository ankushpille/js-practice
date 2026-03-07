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

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise
  .then((message) => {
    console.log(message); // Output: "Promise resolved after 2 seconds"
  })
  .catch((error) => {
    console.error(error);
  });

//async await example
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data); // Output: { userId: 1, id: 1, title: "...", body: "..." }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//arrow function example
const add = (x, y) => x + y;
console.log(add(5, 3)); // Output: 8

//default parameters example
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: "Hello, Guest!"
greet("Alice"); // Output: "Hello, Alice!"

function greet1(name = "guest") {
  console.log(`Hello, ${name}!`);
}
greet1(); // Output: "Hello, guest!"
greet1("Bob"); // Output: "Hello, Bob!"

//debounce example
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const handleResize = debounce(() => {
  console.log("Window resized");
}, 500);
window.addEventListener("resize", handleResize);

//throttle example
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}
const handleScroll = throttle(() => {
  console.log("Window scrolled");
}, 1000);
window.addEventListener("scroll", handleScroll);
