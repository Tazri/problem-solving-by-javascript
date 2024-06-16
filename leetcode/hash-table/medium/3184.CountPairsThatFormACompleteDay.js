/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let total = 0;
  let sum = hours[0];
  let map = new Map();

  for (let i = 0; i < hours.length; i++) {
    hours[i] %= 24;
  }

  for (const r of hours) {
    const need = (24 - r) % 24;

    if (map.has(need)) {
      total += map.get(need);
    }

    if (map.has(r)) {
      const has = map.get(r);
      map.set(r, has + 1);
    } else {
      map.set(r, 1);
    }
  }

  return total;
};

const inputTwo = [12, 12, 30, 24, 24];
const inputOne = [11, 11, 24];

console.log(countCompleteDayPairs([72, 48, 24, 3]));
