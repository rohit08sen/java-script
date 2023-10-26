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

console.log(a);//console.log(a);^ error not in scope ....300 global scope
console.log(b);
console.log(c);
