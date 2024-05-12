/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function (points, s) {
  const edge = [];

  for (let i = 0; i < points.length; i++) {
    edge.push([Math.max(Math.abs(points[i][0]), Math.abs(points[i][1])), s[i]]);
  }

  edge.sort((a, b) => a[0] - b[0]);

  const tagList = new Set();
  let totalPoint = 0;

  while (edge.length) {
    let totalFound = 0;
    let ruleBreak = false;
    let last = null;

    do {
      const first = edge[0];

      if (tagList.has(first[1])) {
        ruleBreak = true;
        break;
      }

      totalFound++;
      tagList.add(first[1]);
      last = first[0];
      edge.shift();
    } while (edge.length && last == edge[0][0]);

    if (ruleBreak) break;

    totalPoint += totalFound;
  }

  return totalPoint;
};

const inputOne = [
  [
    [-35, -3],
    [17, 28],
    [28, -28],
    [25, -1],
    [25, -16],
    [1, -21],
  ],
  "ffcbea",
];

console.log(maxPointsInsideSquare(...inputOne));
