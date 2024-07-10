/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let pos = 0;
  const back = "../";
  const skip = "./";

  for (const log of logs) {
    if (log === skip) continue;
    else if (back === log && pos > 0) pos--;
    else if (back === log) continue;
    else pos++;
  }

  return pos;
};

const one = ["d1/", "d2/", "d3/", "../", "../", "../", "../"]; // 0

console.log(minOperations(one));
