// **********************ARRAY********************

const myArr=[0,1,2,3,4,5];//Array is resizeable in js
const myHeros=["dbfj","ffed","hbdhj"];
const myArry2= new Array(1,2,3,4);
console.log(myArr[2]);    

//Array Methods......................
myArr.push(6);//It will add to existing array at end
myArr.push(7);
myArr.pop();//It will delete last element
myArr.unshift(9);//It will shift all element and placed at first
myArr.shift();
console.log(myArr);

const newArr=myArr.join();//convert array to string
console.log(newArr);

//slice,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);//start from index-1 till 3-1.

console.log("slice ",myn1);
console.log("B ",myArr)

const myn2=myArr.splice(1,3);//IT will remove element from index 1 to index 3 here from main array.
console.log("c ",myArr);
console.log("Splice ",myn2);


