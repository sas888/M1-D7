/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 

Number, can be any number between a maximum and minimum number.

String is a sequence of characters and can be defined using double quotes ("), single quote (') and template literals or back tick (`).

Boolean is used to represent a logical statement which can be either true or false.

Undefiend is a value not yet assigned a value. For example, everytime a variable is declared its content is undefined.

Null is an empty value.*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable can described as a box or container which holds data types such as numbers or text */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let addition = 12 + 20;
console.log(addition);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let fullName = "John Doe";
console.log(fullName);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x;
console.log(subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let nameOne = "john";
let nameTwo = "John";

console.log(
  `Are the names equal? ${
    nameOne === nameTwo
  }, if both names are in lowercase, are they equal? ${
    nameOne === nameTwo.toLowerCase()
  }`
);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 3;

if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
} else {
  console.log("Incorrect number");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let age = 20;
let checkedId = true;

let ageToEnter =
  age >= 18 && checkedId === true
    ? "Thank you, you can enter."
    : "Sorry, you cannot enter.";

console.log(
  `The age is ${age}, we have confirmed the age? ${checkedId}, ${ageToEnter}`
);
