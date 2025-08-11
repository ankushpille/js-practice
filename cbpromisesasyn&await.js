//cb a function takes another function as an argument

function cb(name){
   return `hi ${name}`
}

setTimeout(() => {
   console.log(cb("ankush"))
},1000)


//promise example
const promiseExample = new Promise((resolve,reject) => {
   const success = true;

   if(success){
    resolve("it is resolved")
   }else{
    reject("it is rejected")
   }
})

promiseExample.then((data) => {
  console.log(data);
}).catch((error) => {
    console.log(error)
})


//async await example

function getdata(){
    return Promise.resolve("data resolved sucessfully")
}

async function fetchdata(){
    const data = await getdata();
    console.log(data);
}

fetchdata();

