/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const set = new Set();

  for (const [start, end] of edges) {
    if (set.has(start)) return start;
    if (set.has(end)) return end;

    set.add(start);
    set.add(end);
  }

  return -1;
};

const one = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];

console.log(findCenter(one));
