/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let max, min;

  if (a.length > b.length) {
    max = a.split("");
    min = b.split("");
  } else if (a.length < b.length) {
    min = a.split("");
    max = b.split("");
  } else {
    min = a.split("");
    max = b.split("");
  }

  let carry = false;
  let maxi = max.length - 1;
  let mini = min.length - 1;
  for (; maxi >= 0; maxi--) {
    for (; mini >= 0; mini--) {
      let maxn = max[maxi];
      let minn = min[mini];

      if (minn === "1" && maxn === "1") {
        max[maxi] = carry ? "1" : "0";
        carry = true;
      } else if (
        (minn === "0" && maxn === "1") ||
        (minn === "1" && maxn === "0")
      ) {
        if (carry) {
          max[maxi] = "0";
        } else {
          max[maxi] = "1";
        }
      } else {
        if (carry) {
          max[maxi] = "1";
          carry = false;
        } else {
          max[maxi] = "0";
        }
      }

      maxi--;
    }

    if (carry && maxi >= 0) {
      if (max[maxi] === "1") {
        max[maxi] = "0";
      } else {
        max[maxi] = "1";
        carry = false;
      }
    }
  }

  if (carry) {
    max.unshift("1");
  }

  return max.join("");
};

const a = "101011";
const b = "1011";

console.log(addBinary(a, b));
