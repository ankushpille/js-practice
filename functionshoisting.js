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


