/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  const merged = [meetings[0]];

  // merge
  for (const [currStart, currEnd] of meetings) {
    const [prevStart, prevEnd] = merged[merged.length - 1];

    if (currStart <= prevEnd) {
      if (prevEnd < currEnd) {
        merged[merged.length - 1][1] = currEnd;
      }
    } else {
      merged.push([currStart, currEnd]);
    }
  }

  let leftDay = days;

  for (const [start, end] of merged) leftDay -= end - start + 1;

  return leftDay;
};

const inputOne = [
  10,
  [
    [5, 7],
    [1, 3],
    [9, 10],
  ],
];

console.log(countDays(...inputOne));
