//singleton  declaration
const tinderUser= new Object();
tinderUser.id="123rfg";
tinderUser.name="rohit";
console.log(tinderUser)


//object nesting

const regularUser={
    email:"rohit@3456.com",
    name:{
        username:{
            firstname:"Rohit",
            lastname:"Senapati"
        }
    }
}

console.log(regularUser.name);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3=Object.assign({},obj1,obj2);//combining two object


const obj3={...obj1,...obj2};
console.log(obj3);