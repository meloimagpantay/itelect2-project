// ES5 - var (function-scoped, can be reassigned/redeclared)
var age = 21;
var age = 22; // no error, confusing

// ES6 - let and const (block-scoped)
let age = 21;
age = 22; // fine, let can be reassigned
const PI = 3.1416; // constant, cannot be reassigned
const course = { title: "BSIT", department: "IT" };
course.title = "BSCS";

// ES5 - regular function
function add(a, b) {
  return a + b;
}

// ES6 - arrow function
const add = (a, b) => {
  a + b;
  //other logic
};

// ES5 - string concatenation
var greeting = "Hello, " + name + "! You are " + age + " years old.";

// ES6 - template literals
const greeting = `Hello, ${name}! You are ${age} years old.`;

const greetings2 = `${name}`;

const user = { name: "Juan", email: "juan@email.com", role: "admin" };

// ES6 - object destructuring
const { name, email, role } = user;

console.log(name, email, role);

const scores = [95, 88, 76];

// ES6 - array destructuring
const [first, second, third] = scores;
console.log(first, second, third);

// Spread - combine arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];

// Rest - collect function arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Example calls
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20)); // 30
console.log(sum(5, 5, 5, 5)); // 20
console.log(sum()); // 0

// ES6 - default parameters
function greet(name = "Guest", role = "user") {
  return `Welcome, ${name} (${role})`;
}

console.log(greet());
console.log(greet("Maria", "admin"));

// utils.js
export const add = (a, b) => a + b;
export const greet = (name) => `Hello, ${name}!`;
