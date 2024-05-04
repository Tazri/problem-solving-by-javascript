/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
/*
var findRotateSteps = function (ring, key) {
  let map = new Map();
  function solve(rIndex, kIndex) {
    if (kIndex == key.length) {
      return 0;
    }

    let min = Infinity;
    const mapKey = `${rIndex},${kIndex}`;

    for (let i = 0; i < ring.length; i++) {
      if (ring[i] === key[kIndex]) {
        if (map.has(mapKey)) {
          return map.get(mapKey);
          continue;
        }

        let totalStep = countStep(rIndex, i) + solve(i, kIndex + 1) + 1;

        min = Math.min(min, totalStep);
      }
    }

    map.set(mapKey, min);
    return min;
  }

  function countStep(ringIndex, i) {
    const antiClock = Math.abs(i - ringIndex);
    const clock = Math.abs(ring.length - antiClock);

    let res = Math.min(clock, antiClock);

    return res;
  }

  let res = solve(0, 0, 0);
  return res;
};

*/

// optimal Solution

/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  let result = Infinity;

  // create prev array
  let prev = new Array(ring.length).fill(0);

  for (let kIndex = key.length - 1; kIndex >= 0; kIndex--) {
    let next = new Array(ring.length).fill(0);

    for (let rIndex = 0; rIndex < ring.length; rIndex++) {
      let min = Infinity;

      // calculate the minimum cost
      for (let i = 0; i < ring.length; i++) {
        if (ring[i] === key[kIndex]) {
          // calculate cost
          let cost = calculateStep(rIndex, i) + prev[i] + 1;

          min = Math.min(min, cost);
        }
      }

      next[rIndex] = min;
    }
    if (kIndex == 0) {
      return next[0];
    }
    // console.log(prev);
    // console.log("----------\n\n");
    prev = next;
  }

  function calculateStep(ringIndex, i) {
    const antiClock = Math.abs(i - ringIndex);
    const clock = Math.abs(ring.length - antiClock);

    return Math.min(clock, antiClock);
  }

  // console.log(prev);

  return prev[0];
};

const ring = "godding";
const key = "gd";

const inputOne = [ring, key];

const inputTwo = [
  "caotmcaataijjxi",
  "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx",
];

const inputThree = ["dfjlad", "ad"];

console.log(findRotateSteps(...inputThree));
