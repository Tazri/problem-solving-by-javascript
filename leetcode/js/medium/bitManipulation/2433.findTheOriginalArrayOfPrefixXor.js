/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let s = pref[0];
  for (let i = 1; i < pref.length; i++) {
    let temp = pref[i];

    // update the value with s
    pref[i] ^= s;
    s = temp;
  }

  return pref;
};

const inputOne = [5, 2, 0, 3, 1];

console.log(findArray(inputOne));
