console.log(123.456.toFixed(2));

let salaries = [1000.5,2000.4,3000.5];
let cl = console.log

let total = salaries.reduce((prevSum,curr) => prevSum + curr,0)

cl({total});