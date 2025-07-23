// THIS KEYWORD

// Question 1 : this keyword (in global scope)

let a = 5;
console.log("Global this.a:", this.a); // ❌ undefined in strict mode / module
// In browsers (non-strict), `this` refers to `window`, so `this.a` = 5.
// In strict mode or Node.js, `this` is undefined at global level.


// Question 2 : this inside Method

let user1 = {
  name: "Piyush",
  age: 24,
  getDetails() {
    console.log("Method this.name:", this.name); // "Piyush"
  }
};

user1.getDetails();


// Question 3 : nested object and `this`

let user2 = {
  name: "Piyush",
  age: 24,
  childObj: {
    newName: "Roadside Coder",
    getDetails() {
      console.log("Nested object:", this.newName, "and", this.name); 
      // this.newName = "Roadside Coder", this.name = undefined (not in this context)
    }
  }
};

user2.childObj.getDetails();


// Question 4 : Class & Constructor

class User3 {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log("Class this.name:", this.name);
  }
}

const user3 = new User3("Piyush");
user3.getName();


// Question 5 : Output — Fix: variable name should be `user`

const user4 = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Local';
    return this.firstName;
  }
};

console.log("Object method returns:", user4.getName()); // "Piyush!"


// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
  return {
    name: "John",
    ref: this, // ❌ This refers to global object, not the returned object
  };
}

let user5 = makeUser();
// alert(user5.ref.name); // ❌ undefined in browser
console.log("Ref from makeUser():", user5.ref?.name); // undefined


// Question 7 : Output of setTimeout with this

const user6 = {
  name: 'Piyush Agarwal',
  logMessage() {
    console.log("setTimeout this.name:", this.name);
  }
};

// ❌ setTimeout loses context
setTimeout(() => user6.logMessage(), 1000); // ✅ Use arrow function to keep context


// Question 8 : this in arrow function vs regular method

const user7 = {
  name: 'Piyush',
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`; // ❌ this = undefined in arrow functions
  }
};

console.log(user7.greet()); // Hello, Piyush!
console.log(user7.farewell()); // Goodbye, undefined!


// Question 9 : Calculator with `prompt`

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    // Use fixed values instead of prompt for safe running in Node.js
    this.a = 5;
    this.b = 3;
  }
};

calculator.read();
console.log("Calculator Sum:", calculator.sum()); // 8
console.log("Calculator Mul:", calculator.mul()); // 15


// Question 10 : Output

var length = 4;
function callback() {
  console.log("callback this.length:", this.length);
}

const object10 = {
  length: 5,
  method(callback) {
    arguments[0](); // `this` inside callback points to `arguments` object
  }
};

object10.method(callback, 1, 2); // logs 3 (arguments.length)


// Question 11 : Chaining with this

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  }
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log("Final result:", result.total); // ((0+10)*5 - 30 + 10) = 30
