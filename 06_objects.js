// OBJECT Interview Questions

// Question 1 : Delete keyword in Object
const func = (function (a) {
  delete a; // Only deletes object properties, not function arguments (ignored here)
  return a;
})(5);

console.log("Delete keyword:", func); // Output: 5

// Computed Properties
let property = "firstName";
let name = "Piyush Agarwal";

let bag = {
  [property]: name, // dynamic key
};

console.log("Computed property:", bag.firstName); // Piyush Agarwal
console.log("Access with variable key:", bag[property]); // Piyush Agarwal

// Looping in Object
let user1 = {
  name: "Piyush",
  age: 24,
};

for (let key in user1) {
  console.log("Key:", key);
  console.log("Value:", user1[key]);
}

// Question 2 : Output (Duplicate keys in object literals)
const obj = { a: "one", b: "two", a: "three" };
console.log("Duplicate key:", obj); // { a: "three", b: "two" }

// Question 3 : Multiply numeric properties
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);
console.log("After multiplying numeric values:", nums);

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// Question 4 : Output
const a4 = {};
const b4 = { key: "b" };
const c4 = { key: "c" };

a4[b4] = 123; // object keys are converted to strings => "[object Object]"
a4[c4] = 456;

console.log("Object key conflict:", a4[b4]); // 456 (overwrites previous entry)

// Question 5 : JSON.stringify & JSON.parse
const userOne = {
  name: "piyush",
  age: 87,
};

const strObj = JSON.stringify(userOne);
console.log("Parsed JSON:", JSON.parse(strObj)); // { name: "piyush", age: 87 }

// Question 6 : Output
console.log("Spread string:", [..."Lydia"]); // ['L', 'y', 'd', 'i', 'a']

// Question 7 : Spread operator with object
const user2 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user2 };

console.log("Spread in object:", admin);

// Question 8 : JSON.stringify with replacer array
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log("Stringified with filter:", data); // {"level":19,"health":90}

// Question 9 : Arrow function and 'this'
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log("Diameter:", shape.diameter()); // 20
console.log("Perimeter:", shape.perimeter()); // NaN (this.radius is undefined in arrow function)

// Question 10 : Object destructuring
let user3 = {
  name: "Piyush",
  age: 24,
  fullName: {
    firstName: "Piyush",
    lastName: "Agarwal",
  },
};

const displayName = "Roadside Coder"; // Just a separate variable
const {
  fullName: { firstName },
} = user3;

console.log("Destructured firstName:", firstName);

// Question 11 : Output (rest params and destructuring)
function getItems(fruitList, ...args) {
  const favoriteFruit = args.pop();
  return [...fruitList, ...args, favoriteFruit];
}

console.log("Fruit list:", getItems(["banana", "apple"], "pear", "orange"));
// Output: ["banana", "apple", "pear", "orange"]

// Question 12 : Reference assignment
let c12 = { greeting: "Hey!" };
let d12;

d12 = c12;
c12.greeting = "Hello";
console.log("Reference copied:", d12.greeting); // Hello

// Question 13 : Comparing objects
console.log("Loose equal objects:", { a: 1 } == { a: 1 }); // false
console.log("Strict equal objects:", { a: 1 } === { a: 1 }); // false

// Question 14 : Reference still inside array
let person14 = { name: "Lydia" };
const members = [person14];
person14 = null;

console.log("Reference in array:", members); // [{ name: 'Lydia' }]

// Question 15 : Object spread default param
const value15 = { number: 10 };

const multiply15 = (x = { ...value15 }) => {
  console.log((x.number *= 2));
};

multiply15(); // 20
multiply15(); // 20
multiply15(value15); // 20
multiply15(value15); // 40

// Question 16 : Same as above
const value16 = { number: 10 };

const multiply16 = (x = { ...value16 }) => {
  console.log((x.number *= 2));
};

multiply16(); // 20
multiply16(); // 20
multiply16(value16); // 20
multiply16(value16); // 40

// Question 17 : Pass-by-reference & reassignment
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log("personObj1:", personObj1); // { name: 'Alex', age: 25 }
console.log("personObj2:", personObj2); // { name: 'John', age: 50 }

// Question 18 : Shallow copy vs Deep copy
const obj18 = { a: 1, b: 2 };

// Shallow copy
const objClone1 = Object.assign({}, obj18);

// Deep copy (note: JSON doesn't handle methods, undefined, etc.)
const objClone2 = JSON.parse(JSON.stringify(obj18));

// Spread (also shallow)
const objClone3 = { ...obj18 };

console.log("Shallow copy:", objClone1);
console.log("Deep copy:", objClone2);
console.log("Spread copy:", objClone3);
