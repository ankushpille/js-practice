
//var is function scoped let is block scoped const is also block scoped 
// function testscope(){
//    if(true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//    }
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// testscope();

// var a = 2;
// var a = 3;
// console.log(a);

// //reassign is allowed 2)redecalre is not there for let as it is block scoped
// let b = 3;
//  b =4;
//  console.log(b)

//  //cannot re-assing cannot redeclare
//  const c = 4;
//  c =4
// console.log(c);

//undefined
// console.log(a);
// var a = 20;

//tdz cannot access before intialization
// console.log(b);
// let b = 30;

//tdz cannot access before intialiazation
// console.log(c)
// const c = 40;


// ✅ Check if a value is an array without using Array.isArray().
// let a = [1,2,3,4,5]

// function isArray(a){
//    return Object.prototype.toString.call(a) == '[object Array]'
// }

// console.log(isArray(a));