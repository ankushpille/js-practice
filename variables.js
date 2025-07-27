
//let is block scoped
//const is block scoped
function testScope(){
    if(true){
        var a = 10;
        let b =20;
        const c = 30;
    }
    console.log(a);
    // console.log(b);
    // console.log(c)
}

testScope()

//redeclartion is allowed in var but not in let and const
var age = 20;
var age = 30;
console.log(age)


let name1 = "ankush";
console.log(name1)

const area = "hydrebad"
console.log(area)

//reassignment is allowed in var and let but not in const
var age1 = 20;
age1 = 45
console.log(age1);

let name2 = "ankush"
name2 = "michael"
console.log(name2);

//re-assigment to constant variable is not allowed
const area1 = "hydrebad"
// area1 = "chintal"
// console.log(area1);


//hoisting
console.log(a)
var a = 10;

//cannot access b before intialization
// console.log(b);
// let b = 20

//cannot access c before intialization
// console.log(c)
// const c = 40;

const person = {
    name : "ankush",
    age : 30
}

//modifying the properties are allowed
person.name = "ankush1"
//cannot re-assign to const variable
// person = {name : "ankush2"}
console.log(person)


