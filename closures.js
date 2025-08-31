// function outerfunction(){
//     let count =0;
//     function innerfunction(){
//         count = count +1
//         return count
//     }
//     return innerfunction;
// }

// const example = outerfunction();
// console.log(example());
// console.log(example());

// function outerfunction(){
//     let count = 0;
//     function innerfunction(){
//         count = count +1
//         return count;
//     }
//     return innerfunction;
// }

// const result = outerfunction();
// console.log(result());
// console.log(result());
// console.log(result());


// function greet(name,callback){
//     callback(`hello ${name}`)
// }

// greet("ankus",console.log)

// function multiply(factor){
//     return function(num){
//         return num * factor
//     }
// }

// const double = multiply(5);
// console.log(double(2))


console.log("Try programiz.pro");

function test(){
for(let i=0; i<5; i++){
    setTimeout(() => {
         console.log(i)
    },200)
}
}

test()