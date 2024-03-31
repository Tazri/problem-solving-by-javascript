var isValid = function (s) {
  let stack = [];

  for (let char of s) {
    if ("({[".indexOf(char) > -1) {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) {
      console.log(stack);
      return false;
    }

    const startingChar = stack.pop();

    if (
      (char === ")" && startingChar === "(") ||
      (char === "}" && startingChar === "{") ||
      (char === "]" && startingChar === "[")
    ) {
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

const s = "(]";

console.log(isValid(s));
