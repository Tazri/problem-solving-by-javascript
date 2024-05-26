/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const balls = Array(limit);
  const colorMap = new Map();
  const colorSet = new Set();

  function add(color) {
    const prevColor = colorMap.get(color);
    if (prevColor) {
      colorMap.set(color, prevColor + 1);
    } else {
      colorMap.set(color, 1);
    }
    colorSet.add(color);
  }

  function remove(color) {
    const updateColor = colorMap.get(color) - 1;
    colorMap.set(color, updateColor);

    if (!updateColor) {
      colorSet.delete(color);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [bi, color] = queries[i];
    // if dose not color
    if (!balls[bi]) {
      balls[bi] = color;
      add(color);
      queries[i] = colorSet.size;
    } else {
      const prevColor = balls[bi];
      if (prevColor !== color) {
        add(color);
        remove(prevColor);
        balls[bi] = color;
      }
      queries[i] = colorSet.size;
    }
  }

  return queries;
};

const inputOne = [
  4,
  [
    [1, 4],
    [2, 5],
    [1, 3],
    [3, 4],
  ],
];

const inputTwo = [
  4,
  [
    [0, 1],
    [1, 2],
    [2, 2],
    [3, 4],
    [4, 5],
  ],
];

const inputThree = [
  1,
  [
    [0, 1],
    [1, 4],
    [1, 1],
    [1, 4],
    [1, 1],
  ],
]; // 1 2 1 2 1

console.log(queryResults(...inputThree));
