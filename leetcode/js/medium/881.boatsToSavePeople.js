/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let totalBoat = 0;

  people.sort((a, b) => a - b);

  let f = 0; // first
  let l = people.length - 1; // last

  while (f <= l) {
    if (people[f] + people[l] <= limit) {
      f++;
      l--;
    } else {
      l--;
    }
    totalBoat++;
  }

  return totalBoat;
};

const inputOne = [[3, 2, 2, 1], 3];
const inputTwo = [[5, 1, 4, 2], 6]; // 2
const inputThree = [[44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50]; // 6

console.log(numRescueBoats(...inputThree));
