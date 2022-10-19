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

// FUNCTIONS INSIDE OBJECTS
// object {
//   key: value,
//   methods()
// }

const cat = {
  name: 'Garfield',
  color: 'orange',
  sayHi: function() {
    console.log('Meooooowwww!! 🐈');
  }
};

cat.sayHi();

const person = {
  firstName: 'David',
  lastName: 'Figueroa',
  sayFullName: function() {
    console.log(`My full name is: ${this.firstName} ${this.lastName}`);
  }
};

person.sayFullName();

// OBJECT PROPERTIES ITERATION
const fruit = {
  name: 'Apple',
  color: 'green',
  emoji: '🍏'
};

// FOR OF
// Convert the keys of the object into an array
const fruitKeys = Object.keys(fruit);
// We iterate through those keys as any other array with a for of loop
for (var key of fruitKeys) {
  console.log(fruit[key]);
}

// FOR IN
for (var key in fruit) {
  console.log(fruit[key]);
}

// IN JS EVERYTHING IS AN OBJECT!
const myString = 'hello!';
console.log(myString.__proto__);
