/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isPallndrome(start, end = s.length - 1) {
    if (start == end) return s[start];

    let leftPart = "";
    let rightPart = "";

    while (start <= end) {
      if (s[start] != s[end]) {
        return false;
      }

      leftPart += s[start];

      if (start != end) rightPart = s[end] + rightPart;
      start++;
      end--;
    }

    return leftPart + rightPart;
  }

  const result = [];

  const current = [];

  function backtrack(indx = 0) {
    if (indx >= s.length) {
      result.push([...current]);
      return;
    }

    for (let i = indx; i < s.length; i++) {
      const word = isPallndrome(indx, i);

      if (word) {
        current.push(word);
        backtrack(i + 1);
        current.pop();
      }
    }
  }

  backtrack();

  return result;
};

const inputOne = "aab";

console.log(partition(inputOne));
