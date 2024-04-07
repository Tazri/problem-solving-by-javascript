/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const starStk = [];
  const stk = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      stk.push(i);
    } else if (char === "*") {
      starStk.push(i);
    } else if (char === ")") {
      if (stk.length) {
        stk.pop();
      } else if (starStk.length) {
        starStk.pop();
      } else {
        return false;
      }
    }
  }

  if (!stk.length) {
    return true;
  }

  if (stk.length > starStk.length) {
    return false;
  }

  for (let i = stk.length - 1; i >= 0; i--) {
    const index = stk[i];
    const starIndex = starStk.pop();

    if (index > starIndex) {
      return false;
    }
  }

  return true;
};

const s = "(*))";

console.log(checkValidString(s));

// "((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"

/*
((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()

((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()
true

(***
*/
