greet();

//function declartion is hoisted
function greet(){
    console.log("hello ankush")
}


//in backend function is hoisted top like below
//function greet(){
//console.log("hellow ankush")
//}

//greet()

//function expression are not hoisted  throws an error cannot acces before delaration
const namefc = function(){
    console.log("hello ankush1")
}


//arrow functions
const arrow = (a,b) => {
    return a+b
}

console.log(arrow(2,3));

//arrow function withour braces
const add = (a,b) => a+b;
console.log(add(2,3));


//IIFE immediate invoked function expression

(function(){
  console.log("this is invoking");
})();

(() => {
    console.log("this is arrow invoking")
})();

 

