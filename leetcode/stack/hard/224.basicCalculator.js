/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // tokenize the string
  const tokens = [];
  const symbols = new Set(["(", ")", "+", "-"]);
  let number = "";

  for (const char of s) {
    if (char === " ") continue;
    if (symbols.has(char)) {
      if (number) {
        tokens.push(parseInt(number));
        number = "";
      }
      tokens.push(char);
    } else {
      number += char;
    }
  }

  if (number) {
    tokens.push(parseInt(number));
  }

  let sign = 1;
  let result = 0;
  const stack = [];

  for (const token of tokens) {
    if (!symbols.has(token)) {
      result += sign * token;
    } else if (token === "-" || token === "+") {
      sign = token === "-" ? -1 : 1;
    } else if (token === "(") {
      stack.push([result, sign]);
      result = 0;
      sign = 1;
    } else if (token === ")") {
      const [prevResult, prevSign] = stack.pop();
      result = prevResult + prevSign * result;
    }
  }
  return result;
};

const inputOne = "(1+(4+5+2)-3)+(6+8)";
const inputTwo = " 2-1 + 2 ";
const test = "10-(4+5+2)-3+(6+8)"; // 10

console.log(calculate("1 +  1"));
