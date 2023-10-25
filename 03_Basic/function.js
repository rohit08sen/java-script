//Declaration
function functionName(){
    console.log("erty");
    console.log("ertgch");
    console.log(",mnbv");
}

functionName;//reference
functionName();//function call

function add(n1,n2){//here n1 n2 parameters
    console.log(n1+n2);
}
function add(n1,n2){//here n1 n2 parameters
    // console.log(n1+n2);
    let result=n1+n2;
    return result;
}

add(7,9);//here 7,9 are arguments
const result=add(5,8);
console.log(result);//undefined why??

function userlogin(username){
    return `${username} just logged in`
}
console.log(userlogin("Rohit"));


//shoping cart
function calculateCartPrice(...num1){//rest operator for take as much as parameter
    return num1;
}
console.log(calculateCartPrice(200,345,678));

//how to pass object in function
const user={
    username:"Rohit",
    id:"q67"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);
}

handleObject(user);
