// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})();//()-->function call ()---->execution .....DUE TO PROBLEM IN GLOBAL SCOPE POLLUTION WE USED THIS SYNTAX

( (name)=>{
    console.log(`name: ${name}`);
})("rohit");