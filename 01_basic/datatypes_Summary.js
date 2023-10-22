//Primitive:
//7 types: String ,Number, Boolean ,null, Undefined ,Symbol, BigInt
//Symbol is used for uniqueness
//JS is DYNAMICALLY typed language.

let userEamil;//undefined
const id=Symbol('123');
const anotherId=Symbol('123"');
console.log(id===anotherId);//false

//Reference (Non-Primitive):

//Array, Objects,Functions

const fruit=["Apple","Mango","Strawberry"];
let myObj={
    name:"Rohit",
    age:20,
}

const myFunction = function(){//Data Type is Function
    console.log("HelloRohit")
}

//dataType of null is OBJECT.