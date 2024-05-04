/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    // count 1 in a and b
    let cA = count(a);
    let cB = count(b);

    if (cA < cB) {
      return -1;
    } else if (cA > cB) {
      return +1;
    }

    return a - b;
  });
};

function count(a) {
  let c = 0;
  while (a) {
    if (a & 1) c++;
    a >>= 1;
  }

  return c;
}

const inputOne = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // [0,1,2,4,8,3,5,6,7]

console.log(sortByBits(inputOne));
