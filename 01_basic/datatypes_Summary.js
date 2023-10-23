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

//**********************************************//
//Stack (Primitive), Heap(non-primitive)

let myName="Rohit";
let anotherName=myName;
anotherName="omm";
console.log(myName);
console.log(anotherName);//It will copy 


let user1={
    email:"riodc678@gmail",
    upi:"hello@ybl",
}

let user2=user1;
user2.email="Rohit@google.com";

console.log(user1.email);//Reference will be taken
console.log(user2.email);


