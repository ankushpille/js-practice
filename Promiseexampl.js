const promise = new Promise((resolve,reject) => {
    let success = false;
    if(success){
        resolve("promise is resolved")
    }else{
        reject('promise is rejected')
    }
})

async function handlePromise(){
    try{
    const result = await promise
    console.log(result);
    }catch(error){
        console.log(error)
    }
    
}

handlePromise()


console.log("start")

process.nextTick(() => {
    console.log("hello processnextTick")
})

setTimeout(() => {
    console.log("hello setTimeout 1ms")
},1000)

setImmediate(() => {
    console.log("hello setImmediate")
})

console.log("end")
