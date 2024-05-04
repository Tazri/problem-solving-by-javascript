/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  while (v1.length || v2.length) {
    let n1 = parseInt(v1.shift() || "0");
    let n2 = parseInt(v2.shift() || "0");

    if (n1 > n2) {
      return 1;
    } else if (n2 > n1) {
      return -1;
    }
  }

  return 0;
};

const inputOne = ["1.01", "1.001.0.0"];
const inputTwo = ["0.1", "1.1"];

console.log(compareVersion(...inputTwo));
