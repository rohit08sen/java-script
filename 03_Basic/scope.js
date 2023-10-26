// let a=10;
// const b=20;
// var c=30;

// console.log(a,b,c);//output is coming but why different data type is used?
//solution
let a=300;

if (true){
    let a=10;
    const b=20;
    // var c=30;
    console.log("Inner ",a);//scope
}




// console.log(a);//console.log(a);^ error not in scope ....300 global scope
// console.log(b);
// console.log(c);

//Nested scope

function one(){
    const username="Rohit";

    function two(){
        const website="Youtube";
        console.log(username);//won't give error ....child can excess from parent but not vice-versa.
    }
    // console.log(website);//give error out of scope

    two();
}

one();

//**********************interesting******************** 
console.log(addone(5));//won't give error
function addone(value){
    return value+1;
}
// addone(5);

console.log(addTwo(5));//it will give error variable can't found
const addTwo=function(value){//this called expression
    return value+2;
}
// addTwo(5);
