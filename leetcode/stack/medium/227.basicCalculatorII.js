/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sign = 1;
  const operand = new Set(["+", "-", "/", "*"]);
  const tokens = [];
  let number = 0;

  for (const char of s) {
    if (char === " ") continue;

    if (!operand.has(char)) {
      number = number * 10 + parseInt(char);
      continue;
    }

    tokens.push(number * sign);
    number = 0;

    if (char === "-") {
      sign = -1;
    } else {
      sign = 1;
    }

    if (char === "*") {
      tokens.push("*");
    } else if (char === "/") {
      tokens.push("/");
    }
  }

  tokens.push(number * sign);

  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*") {
      const leftOp = stack.pop();
      const rightOp = tokens[i + 1];
      stack.push(leftOp * rightOp);
      i++;
    } else if (tokens[i] === "/") {
      const leftOp = stack.pop();
      const rightOp = tokens[i + 1];
      let result = leftOp / rightOp;

      if (result < 0) {
        result = -1 * Math.floor(-1 * result);
      } else {
        result = Math.floor(result);
      }
      stack.push(result);
      i++;
    } else {
      stack.push(tokens[i]);
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
};

const inputOne = " 3+5 / 2 ";
const inputTwo = "3+2*2";
const inputThree = "42";
const inputFour = "14-3/2";

console.log(calculate(inputFour));
