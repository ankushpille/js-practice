function outerfunction(){
    let count =0;
    function innerfunction(){
        count = count +1
        return count
    }
    return innerfunction;
}

const example = outerfunction();
console.log(example());
console.log(example());

