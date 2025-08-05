
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

//diffrence between == and ===
// let a = '2'

// if(2===a){
//     console.log("it is 2")
// }else{
//     console.log('it is not matching')
// }

// // ✅ Convert a string to a number without parseInt.
// let a = '2'

// console.log(typeof(Number(a)))

// ✅ How to clone an object (shallow copy and deep copy)?


// const bag = {
//     bag: 5,
//     pencilebox:{
//         pencils: 2,
//         pen:1
//     }
// }

// // const shallowcopy = {...bag}
// // copy.pencilebox.pencils = 10;
// // console.log(copy)

// //deepcopy
// const deepcopy =JSON.parse(JSON.stringify(bag))
// deepcopy.pencilebox.pencils = 20
// console.log(bag)
// console.log(deepcopy)

// //closures
// function outerfunction(){
//     let count = 0;
//     function innerfunction(){
//         count = count +1
//        return count;
//     }
//     return innerfunction;
// }

// const counter = outerfunction();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//normal function
// function add(a,b){
//     return a +b
// }
// console.log(add(2,3))

//function currying
// function add(a){
//     return function(b){
//         return a + b
//     }
// }

// console.log(add(2)(3))

//hoisting in javascripts
// console.log(a());
// function a(){
//     return "ankush"
// }

// //funtion expression is not hoisted 
// console.log(a());
// const a = () => {
//     return "ankush"
// }

// ✅ What is the this keyword? Try logging this inside a method.
// const person = { 
//     name: "ankush",
//         greet : () => {
//           console.log(this.name)
//         }
// }

// person.greet();

// let a = 'ankush'
//  let splitA = a.split("")
// let reverse = []
// for(let i=a.length-1; i>=0; i--){
//     reverse.push(a[i])
// }
// console.log(reverse.join(''))

// console.log(splitA.reverse().join(''))

//✅ Write map() manually using forEach.
// function custommap(array, callback) {
//   let result = [];

//   array.forEach((item, index) => {
//     const transformed = callback(item, index, array);
//     result.push(transformed);
//   });
//   return result;
// }



// function custommap(array,callback){
//     let result = []
//     array.forEach((item,index) => {
//        let transformed = callback(item,index,array)
//        result.push(transformed)
//     })
//     return result
// }

// let numbers = [1,2,3];
// const doubled = custommap(numbers, (item) => {
//    return item *2
// })

// console.log(doubled)

// let a = [1,2,3]

// const sum = () => {
//    return a.reduce((acc,cur) => {
//         return acc + cur
// },0)
// }

// console.log(sum(a));

//✅ Flatten a nested array [1, [2, [3, 4]]] to [1, 2, 3, 4].

// let a = [1, [2, [3, 4]]] 
// let flatedArray = a.flat(2)
// console.log(flatedArray)







