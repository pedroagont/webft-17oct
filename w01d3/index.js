console.log('Hi from index! 👋');

// DATA TYPES
// Primitive / Inmutable values
const string = 'Hello!';
const number = 666;
const boolean = true;
const undef = undefined;
const nul = null;

// Mutable values
const array = [1, 2, 4];
const object = { color: 'blue' };

// OBJECTS
// const object = { key: value }
const user = {
  firstName: 'Pedro',
  lastName: 'González'
};

// dot notation
// object.property
// console.log(user.firstName);

// bracket notation
// console.log(user['firstName']);

const lastName = 'firstName';
console.log(user.lastName); // González
console.log(user[lastName]); // Pedro

// arrays: we access to its values by a position index
const numbersArray = [1, 2, 3];
console.log(numbersArray[1]);

// objects: we access to its values by a key property
const numbersObject = { 1: 1, 2: 2 };
console.log(numbersObject[1]);

// PASSING VALUES AS ARGUMENTS TO FUNCTIONS
let myCar = {
  name: 'Ferrari',
  color: 'red'
};

const paintCar = function(car) {
  car.color = 'blue';
};

paintCar(myCar);
console.log(myCar);

const reassingCar = function(car) {
  car = {};
  console.log('inside reassign', car);
};

reassingCar(myCar);
console.log('outside reassign', myCar);
