/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const setenceStack = [];
  let wordStack = [];

  for (const char of s) {
    if (char === "(") {
      setenceStack.push(wordStack);
      wordStack = [];
    } else if (char === ")") {
      const prev = setenceStack.pop();
      wordStack.reverse();
      prev.push(...wordStack);
      wordStack = prev;
    } else {
      wordStack.push(char);
    }
  }

  return wordStack.join("");
};

const one = "(ed(et(oc))el)";

console.log(reverseParentheses(one));
