const user={
    username:"rohit",
    price:890,

    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website`)//this===current context
        console.log(this);
       
    }
}

user.welcomeMessage();
user.username="Omm"
user.welcomeMessage();//Omm,Welcome to website due to this keyword possible
 /*rohit,Welcome to website
        {
          username: 'rohit',
          price: 890,
          welcomeMessage: [Function: welcomeMessage]
        }
        Omm,Welcome to website
        {
          username: 'Omm',
          price: 890,
          welcomeMessage: [Function: welcomeMessage]
        } 
 */
console.log(this);//{}
// In browser window is the global object  output:Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …




// function cofee(){
//     let username="etrs"
//     console.log(this.username);//undefined
// }

// cofee();

//Arrow

const chai = ()=>{//this is how arrow function declared
    let username="Rohit";
    console.log(this.username);//undefined
}
// chai();

// const add2=(n1,n2)=>{
//     return n1+n2;
// }//retun key word needed

const add2=(n1,n2) =>(n1+n2);//implicit return keyword not needed ...helpful in react  you have to wrap in ()

console.log(add2(4,9));

