/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  const distance = (x, y) => Math.abs(x - y);

  position.sort((a, b) => a - b);

  function isPossible(d) {
    let remain = m;
    let prev = null;

    for (const pos of position) {
      if (!prev) {
        prev = pos;
        remain--;
        continue;
      }

      if (!remain) return true;

      if (distance(prev, pos) >= d) {
        remain--;
        prev = pos;
      }
    }

    return remain ? false : true;
  }

  let left = 0;
  let right = position[position.length - 1];
  let max = 0;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (isPossible(mid)) {
      max = Math.max(mid, max);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
};

// const inputOne = [[1, 2, 3, 4, 7], 3];
const inputOne = [[79, 74, 57, 22], 4];
const inputTwo = [[5, 4, 3, 2, 1, 1000000000], 2];
const long = [
  [
    269826447, 974181916, 225871443, 189215924, 664652743, 592895362, 754562271,
    335067223, 996014894, 510353008, 48640772, 228945137,
  ],
  3,
];

console.log(maxDistance(...long));
console.log("----------------");
console.log(maxDistance(...inputTwo));
