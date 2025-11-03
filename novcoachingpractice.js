console.log(123.456.toFixed(2));

let salaries = [1000.5,2000,3000.5];
let cl = console.log

let total = salaries.reduce((prevSum,curr) => prevSum + curr,0)

let doubleSalary = salaries.map((num) => num * 2);

cl({doubleSalary});

let greaterThanOrEqualTo2000 = salaries.filter((num) => num > 2000);
cl({greaterThanOrEqualTo2000});