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