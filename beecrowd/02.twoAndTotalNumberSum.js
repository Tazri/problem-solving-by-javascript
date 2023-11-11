/**
 * problem one : write a function that returns the sum of two numbers.
 * problem two : write a funciton that sum of all numbers regardless of # of params.
 */

// problem one
let sum = (numberOne,numberTwo)=> numberOne + numberTwo;

// problem two
let totalSum = (...numbers) => numbers.reduce((a,b)=> a+b,0);

// test the functions
console.log(sum(1,2));
console.log(totalSum(1,2,3,4,5));