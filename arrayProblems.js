let arr = [1, 2, 3, 4, 5]

for(let i=0; i<arr.length; i++){
     console.log(arr[i]);
}


arr = [10, 20, 30]
let length = arr.length-1
console.log(arr[0],arr[length]);

arr = [5, 8, 2, 9]
console.log(arr.length);

arr = [7, 3, 9, 1,4,2]
for(let i=0; i<arr.length; i++){
    if(arr[i] %2 ==0){
        console.log("even number",arr[i])
    }
}


arr = [2, 4, 6, 8]
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}

console.log("sum",sum)