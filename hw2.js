// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;

let gender = isMale === true ? "Male" : "Female";

console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let firstNum = 6;
let secondNum = 2;
let checkTotal = 8;

if (
  firstNum === checkTotal ||
  secondNum === checkTotal ||
  firstNum + secondNum === checkTotal ||
  firstNum - secondNum === checkTotal
) {
  console.log(true);
} else {
  console.log(false);
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let thirdString = "First String" + " " + "Second String";
console.log(thirdString);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let firstInt = 5;
let secondInt = 6;

let average = (firstInt + secondInt) / 2;

console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
