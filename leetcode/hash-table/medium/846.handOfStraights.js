/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (groupSize === 1) return true;
  if (hand.length % groupSize !== 0) return false;

  hand.sort((a, b) => a - b);
  const map = [];

  let cur = hand[0];
  let item = [cur, 1];

  for (let i = 1; i < hand.length; i++) {
    const num = hand[i];

    if (num == cur) {
      item[1]++;
    } else {
      map.push(item);
      cur = num;
      item = [cur, 1];
    }
  }

  map.push(item);

  // let fill group
  while (map.length) {
    map[0][1]--;
    const take = map[0][0];

    for (let i = 1; i < groupSize; i++) {
      if (i >= map.length) return false;
      if (take + i !== map[i][0]) {
        return false;
      }

      if (map[i][1] <= 0) {
        return false;
      }

      map[i][1]--;
    }

    // now remove
    while (map.length && map[0][1] === 0) {
      map.shift();
    }
  }

  return true;
};

const inputOne = [[1, 2, 3, 6, 2, 3, 4, 7, 8], 3];
const inputTwo = [[1, 2, 3, 4, 5], 4];
const inputThree = [[1, 1, 2, 2, 3, 3], 2];

console.log(isNStraightHand(...inputThree));
