const car=["Nano","Bolero","Thar"];
const bike=["Bullet","Yezdi","Luna"];

car.push(bike);
console.log(car);//array as data it will take .here bike array is a element of car :[ 'Nano', 'Bolero', 'Thar', [ 'Bullet', 'Yezdi', 'Luna' ] ]


const allVehicle=car.concat(bike)//[ 'Nano', 'Bolero', 'Thar', 'Bullet', 'Yezdi', 'Luna' ]
console.log(allVehicle);

const gaadi=[...bike,...car];//spread operator ... it will spread the array
console.log(gaadi);//output:[ 'Bullet', 'Yezdi', 'Luna', 'Nano', 'Bolero', 'Thar' ]

const rohit=[1,2,3,4,[5,6,[7,8,9,[10]]]];
const omm=rohit.flat(Infinity);//it will flat all the sub array into a single array
console.log(omm);//[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

console.log(Array.isArray("Rohit"));//It will check
console.log(Array.from("Rohit"));//it will convert to array

//Array.of