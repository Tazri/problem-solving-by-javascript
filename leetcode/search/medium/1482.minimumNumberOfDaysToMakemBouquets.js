/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  function isPossible(day) {
    let total = 0;
    let collect = 0;

    for (const d of bloomDay) {
      if (collect >= k) {
        total++;
        collect = 0;
      }

      if (total >= m) return true;

      if (d <= day) {
        collect++;
      } else {
        collect = 0;
      }
    }

    if (collect >= k) total++;

    if (total >= m) return true;
    return false;
  }

  let minDay = Math.max(...bloomDay);

  let left = 0;
  let right = minDay;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (isPossible(mid)) {
      right = mid - 1;
      minDay = Math.min(mid, minDay);
    } else {
      left = mid + 1;
    }
  }

  return minDay;
};

const inputOne = [[1, 10, 3, 10, 2], 3, 1];
const inputTwo = [[7, 7, 7, 7, 12, 7, 7], 2, 3];

console.log(minDays(...inputOne));
console.log("----------------------");
console.log(minDays(...inputTwo));
