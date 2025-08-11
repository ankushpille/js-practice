function greet(name){
    return `hi ${name}`
}

function processuserinput(callback){
    console.log(callback("ankush"));
}

processuserinput(greet);