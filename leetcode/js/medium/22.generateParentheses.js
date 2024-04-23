/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const output = [];
  const stack = [];

  function calculate(o, c) {
    if (o >= n && c >= n) {
      output.push(stack.join(""));
      return;
    }

    if (!stack.length) {
      stack.push("(");
      calculate(o + 1, c);
      stack.pop();
    }

    if (stack[stack.length - 1] === "(" && o < n) {
      stack.push("(");
      calculate(o + 1, c);
      stack.pop();
    }

    if (c < o) {
      stack.push(")");
      calculate(o, c + 1);
      stack.pop();
    }

    if (stack[stack.length - 1] === ")" && o < n) {
      stack.push("(");
      calculate(o + 1, c);
      stack.pop();
    }
  }

  calculate(0, 0);
  return output;
};

console.log(generateParenthesis(1));
