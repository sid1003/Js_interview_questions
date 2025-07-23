// CALL, APPLY & BIND Interview Questions

// Question 1 : What is Call?

function sayHello() {
  return "Hello " + this.name;
}

var obj = { name: "Piyush" };
console.log(sayHello.call(obj)); // "Hello Piyush"


// Question 2 : What is Apply?

function sayHello2(day) {
  return "Hello " + this.name + ", today is " + day;
}

var obj = { name: "Piyush" };
console.log(sayHello2.apply(obj, ["Wednesday"])); // pass as array


// Question 3 : What is Bind?

function sayHello3() {
  return "Hello " + this.name;
}

var obj = { name: "Piyush" };
const helloFn = sayHello3.bind(obj);
console.log(helloFn()); // "Hello Piyush"


// Question 4 : Output

const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));        // "Piyush is 24"
console.log(sayHi.bind(person, 24)());      // "Piyush is 24"


// Question 5 : Call with function inside object

const age = 10;
var person1 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  }
};

var person2 = { age: 24 };
console.log(person1.getAge.call(person2)); // 24


// Question 6 : Output

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());             // '🥑'
  console.log(data.getStatus.call(this));    // '😎' or undefined (depends on env)
}, 0);


// Question 7 : Call printAnimals such that it prints all animals in object

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}


// Question 8 : apply to append an array to another

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ['a', 'b', 0, 1, 2]


// Question 9 - Using apply to enhance built-in functions

const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, numbers)); // 7


// Question 10 : How will you Create a bound function

function f1() {
  console.log(this);
}

let user1 = {
  g: f1.bind(null)
};

user1.g(); // null (in strict mode), or globalThis


// Question 11 : Bind Chaining?

function f2() {
  console.log(this.name);
}

f2 = f2.bind({ name: "John" }).bind({ name: "Ann" });
f2(); // John (bind works only once)


// Question 12 : Fix the code

function checkPassword(success, failed) {
  const password = "Roadside Coder"; // simulate
  if (password === "Roadside Coder") success();
  else failed();
}

let user2 = {
  name: 'Piyush Agarwal',

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

checkPassword(user2.loginSuccessful.bind(user2), user2.loginFailed.bind(user2));


// Question 13 : Partial application for login

function checkPassword2(ok, fail) {
  const password = "Roadside Coder"; // simulate
  if (password === "Roadside Coder") ok();
  else fail();
}

let user3 = {
  name: 'Piyush Agarwal',

  login(result) {
    console.log(this.name + (result ? ' login successful' : ' login failed'));
  }
};

checkPassword2(
  user3.login.bind(user3, true),
  user3.login.bind(user3, false)
);


// Question 14 : Explicit Binding with Arrow Function

const ageGlobal = 10;

var person4 = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age), // ❌ doesn't bind `this`
  getAge: function () {
    console.log(this.age);
  }
};

var person5 = { age: 24 };
person4.getAge.call(person5);        // 24
person4.getAgeArrow.call(person5);   // undefined (arrow uses lexical `this`)


// Question 15 : Call Method Polyfill

let car1 = { color: 'Red', company: 'Ferrari' };
let car2 = { color: 'Blue', company: 'BMW' };
let car3 = { color: 'White', company: 'Mercedes' };

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + " is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car3, '₹', '60,00,000');


// Question 16 : Apply Method Polyfill

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + " is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car2, ['₹', '50,00,000']);


// Question 17 : Bind Method Polyfill

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + " cannot be bound as it's not callable");
  }
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
initPurchaseBmw();
