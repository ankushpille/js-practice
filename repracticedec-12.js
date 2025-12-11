// Return the largest number in an array.
let arr = [1, 3, 4, 5, 7];
function largestNumber(arr) {
  if (arr.length == 0) return null;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber(arr));

//Find the sum of all numbers in an array.
arr = [1, 2, 3, 4];

const result = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
