// MAP, FILTER & REDUCE Interview Questions

// Question 1 : Array.map()
const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => num * 3);
console.log("Multiply by 3:", multiplyThree);


// Question 2 : Array.filter()
const nums2 = [1, 2, 3, 4];
const moreThanTwo = nums2.filter((num, i, arr) => num > 2);
console.log("Greater than 2:", moreThanTwo);


// Question 3 : Array.reduce()
const nums3 = [1, 2, 3, 4];
const sum = nums3.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log("Sum:", sum);


// Question 4 : Map Polyfill
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      temp.push(cb(this[i], i, this));
    }
  }
  return temp;
};


// Question 5 : Filter Polyfill
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      if (cb(this[i], i, this)) temp.push(this[i]);
    }
  }
  return temp;
};


// Question 6 : Reduce Polyfill
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = cb(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};


// Question 7 : map vs forEach
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1 - Return only the names of students in capital

// Solution 1 : Traditional for() loop
let studentNames1 = [];
for (let index = 0; index < students.length; index++) {
  studentNames1.push(students[index].name.toUpperCase());
}
console.log("Names in uppercase (for loop):", studentNames1);

// Solution 2 : forEach()
let studentNames2 = [];
students.forEach(student => {
  studentNames2.push(student.name.toUpperCase());
});
console.log("Names in uppercase (forEach):", studentNames2);

// Solution 3 : map() 
let studentNames3 = students.map(stu => stu.name.toUpperCase());
console.log("Names in uppercase (map):", studentNames3);


// Q2 - Get the details of students who scored more than 60 marks
let scoredAbove60 = students.filter(stu => stu.marks > 60);
console.log("Students with marks > 60:", scoredAbove60);


// Q3 - Students who scored more than 60 and rollNumber > 15
let filteredStudents = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15);
console.log("Marks > 60 and rollNumber > 15:", filteredStudents);


// Q4 - Sum total of the marks of the students
let totalMarks1 = students.reduce((acc, stu) => acc + stu.marks, 0);
console.log("Total Marks:", totalMarks1);


// Q5 - Get only the names of the students who scored more than 60 marks
let topScorersNames = students
  .filter(stu => stu.marks > 60)
  .map(stu => stu.name);
console.log("Names of students with marks > 60:", topScorersNames);


// Q6 - Total marks after adding 20 to those who scored less than 60, then filter > 60
let totalMarks = students
  .map((student) => (student.marks < 60 ? student.marks + 20 : student.marks))
  .filter((mark) => mark > 60)
  .reduce((acc, mark) => acc + mark, 0);
console.log("Total marks after adjustment:", adjustedTotalMarks);
