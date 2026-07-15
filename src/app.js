// app.js
//"../index.html"
import { add, greet } from "./utils.js";

console.log(add(2, 3));
console.log(greet("Juan"));

// app.js - Main application entry point
console.log("Server starting...");

var getFullName = function (first, last) {
  return first + " " + last;
};
var user = { first: "Juan", last: "Dela Cruz" };
console.log("Name: " + getFullName(user.first, user.last));

const getFullName = (first, last) => `${first} ${last}`;
const { first, last } = { first: "Juan", last: "Dela Cruz" };
console.log(`Name: ${getFullName(first, last)}`);
