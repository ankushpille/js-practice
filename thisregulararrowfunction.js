const obj = {
    name : "ankush",
    regular : function (){
        console.log(this.name)
    }
}

obj.regular();

const obj1 = {
    name : "ankush1",
    arrow : () => {
        console.log(this.name)
    }
}

obj1.arrow();