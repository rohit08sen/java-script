//refer  little bit MDN
//DATES
let myDate=new Date();//Date() it will give time
console.log(myDate);//2023-10-24T03:06:17.526Z
console.log(myDate.toString());//Tue Oct 24 2023 03:08:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Oct 24 2023
console.log(myDate.toLocaleString());//10/24/2023, 3:08:56 AM
console.log(typeof myDate);//object

let myCreatedDate=new Date(2023,9,24);//year month(start from 0) date
console.log(myCreatedDate.toDateString());
let myCreateDate=new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now();//Don't use new. value come in mili second
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})//object



