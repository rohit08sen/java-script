const score=400;//implicitly number
console.log(score);

const balance =new Number(100);//explicitly declare as number
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));//toFixed(2):it will give no. of decimal 

const otherNumber=189.2783
console.log(otherNumber.toPrecision(3))//range:1-21  precision value

const hundred=1000000000;
console.log(hundred.toLocaleString('en-IN'));//it will give comma after zeros.learn more on console.

//*************************MATH********************************
console.log(Math);//Math is object.
console.log(Math.abs(-4));
console.log(Math.round(4.6));
//More function related to math is present u can refer to console browser

console.log(Math.random());//value come between 0-1.
console.log((Math.random()*10)+1);

//How to get between number
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);//Remember the formula



