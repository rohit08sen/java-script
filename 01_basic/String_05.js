const name="Rohit";
const repoCount=69;

// console.log(name+"Senapati"); old one

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);//Morden Syntax String interpulation


const gameName= new String('Senapati');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);//It will give length of String
console.log(gameName.toUpperCase());//It will make the string uppercase
console.log(gameName.charAt(2));//It will give which index has which char.
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);//it will slice last digit will not be print output:sena 
console.log(newString);

const anotherString=gameName.slice(-7,4);
console.log(anotherString);

const newStringOne="   Rohit  ";
console.log(newStringOne);
console.log(newStringOne.trim());//it will trim() spaces.trim start and trimend also possible

const url="https://rohit.com/rohit%69senapati";
console.log(url.replace('%69','-'));//replace('what to replace','which is to be replace');

console.log(url.includes('rohit'));//It will check whether 
console.log()