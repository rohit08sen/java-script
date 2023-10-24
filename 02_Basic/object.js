//Singleto   object.create

//object literals:how to declare object
const mySym=Symbol("key1")

const jsUser={
    name:"Rohit",//name:key Rohit:key value here the key aretracked as string
    age:20,
    [mySym]:"key1",//to declare as symbol put key in square bracket
    location:"Baripada",
    email:"rohit@gmail.com",
    isLoggedIn:false
}
//How to access
console.log(jsUser.email);
console.log(jsUser["location"]);
console.log(jsUser[mySym]);

// Object.freeze(jsUser);//After freezing no one can change the value;

jsUser.greeting= function(){
    console.log("Hello");
}

console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greetingTwo());