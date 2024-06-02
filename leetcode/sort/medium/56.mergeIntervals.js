/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  // merge
  for (const [currStart, currEnd] of intervals) {
    const [prevStart, prevEnd] = merged[merged.length - 1];

    if (currStart <= prevEnd) {
      if (prevEnd < currEnd) {
        merged[merged.length - 1][1] = currEnd;
      }
    } else {
      merged.push([currStart, currEnd]);
    }
  }

  return merged;
};

const inputOne = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(inputOne));
