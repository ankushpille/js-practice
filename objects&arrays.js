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

const{name1,firstname} = obj

console.log("name,firstname",name1,firstname)
