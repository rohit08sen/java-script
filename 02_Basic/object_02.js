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

const users=[
    {
        id:1,
        email:"xvbng@345.com"
    },
    {
        id:5,
        email:"xvbng@3565.com"
    },
    {
        id:6,
        email:"xvbng@3456.com"
    }
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name' ] array
console.log(Object.values(tinderUser));//[ '123rfg', 'rohit' ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123rfg' ], [ 'name', 'rohit' ] ]

console.log(tinderUser.hasOwnProperty("name"));//To check whether property is present or not.