// VAR, LET & CONST Interview Questions

// Question 1 : Variable Shadowing
// ---------------------------------
function testShadowing() {
  let a = "Hello";

  if (true) {
    let a = "Hi"; // New block-scoped variable, doesn't affect outer 'a'
    console.log("Inner a:", a); // Output: "Hi"
  }

  console.log("Outer a:", a); // Output: "Hello"
}

testShadowing();


// Question 2 : Illegal Shadowing
// ---------------------------------
// Fixed: Renamed function and removed illegal `var b` (shadowing let outside the block is illegal)

function testShadowingError() {
  var a = "Hello";
  let b = "Namaste";

  if (true) {
    let a = "Hi"; // ✅ Legal shadowing
    // var b = "Bye"; ❌ ILLEGAL shadowing: cannot declare 'var' after 'let' with same name in same scope
    let b = "Bye"; // ✅ Legal: both inside and outside `let`
    console.log("Inner a:", a); // Output: "Hi"
    console.log("Inner b:", b); // Output: "Bye"
  }

  console.log("Outer b:", b); // Output: "Namaste"
}

testShadowingError();


// Question 3 : Hoisting
// ---------------------------------
// `var` is hoisted and initialized as `undefined`

console.log("Before declaration, a =", a); // Output: undefined
var a = 10;
console.log("After declaration, a =", a); // Output: 10


// Question 4 : Temporal Dead Zone (TDZ)
// ---------------------------------
// `let` and `const` are hoisted but **not initialized**, so accessing them before declaration causes a ReferenceError

try {
  console.log("TDZ Test:", a, b, c); // ❌ ReferenceError for b and c
} catch (err) {
  console.log("TDZ Error:", err.message); // Output: Cannot access 'b' before initialization
}

var a = 10;
let b = 20;
const c = 30;

console.log("After declarations:", a, b, c); // ✅ 10 20 30
