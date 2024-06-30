/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  const map = new Array(n).fill(0);

  for (const [n1, n2] of roads) {
    map[n1]++;
    map[n2]++;
  }

  map.sort((a, b) => a - b);

  let res = 0;
  let i = 1;

  for (const times of map) {
    res += times * i++;
  }

  return res;
};

const one = [
  5,
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 2],
    [1, 3],
    [2, 4],
  ],
];

console.log(maximumImportance(...one));
