/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const l = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      l.push("FizzBuzz");
    } else if (i % 3 == 0) {
      l.push("Fizz");
    } else if (i % 5 == 0) {
      l.push("Buzz");
    } else {
      l.push(i.toString());
    }
  }
  return l;
};

const inputOne = 15;

console.log(fizzBuzz(inputOne));
