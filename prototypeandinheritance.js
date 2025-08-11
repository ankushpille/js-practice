
//if js cant find on object it goes to the prototype to look for it
const person = {
    greet() {console.log("hello")}
}

const john = Object.create(person);
john.greet()

//inheritance one object gets properties or methods from another
const animal = {
    eats : true
}

const dog = Object.create(animal); //prototype
console.log(dog.eats); // inherits
dog.barks = true;

console.log(dog.barks);

