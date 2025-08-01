//array destructuring
const arr = [1,2,3]
const[a,b,c] = arr;
console.log(a,b,c)

//skipping values in array destructuring
const [x,,z] = [10,20,30]
console.log(z)


//object desstructuring
const obj = {
    name1: 'ankush',
    firstname: 'pille',
    city:'hydrebad'
}

// const{name1,firstname} = obj

// console.log("name,firstname",name1,firstname)


//rename values
const{name1: newname,firstname} = obj
console.log(newname,firstname);1

//creating arrays 
 let a1 = [1, 2, 3];
 let b1 = [4, 5, 6];
 let c1 = Array.of(1, 2, 3);
 let d1 = Array.from(1, 2, 3, 4, 5);
 console.log(a1, b1, c1, d1);

