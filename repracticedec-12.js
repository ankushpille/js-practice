// Return the largest number in an array.
let arr = [1,3,4,5,7]
function largestNumber(arr){
     if(arr.length == 0) return null;
     let max = 0;
     for(let i=0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i]
            }
     }
     return max;
}

console.log(largestNumber(arr));