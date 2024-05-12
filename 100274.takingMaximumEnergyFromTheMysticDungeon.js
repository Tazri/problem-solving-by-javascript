/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  let max = -Infinity;

  for (let i = k; i < energy.length; i++) {
    // go back and calculate sum
    const sum = energy[i - k] + energy[i];

    if (sum > energy[i]) {
      energy[i] = sum;
    }
  }

  for (let i = 0; i < k; i++) {
    max = Math.max(energy.pop(), max);
  }
  return max;
};

const inputOne = [[5, 2, -10, -5, 1], 3]; // 3
const inputTwo = [[-2, -3, -1], 2]; // -1
const inputFour = [[8, -5], 1]; // 3
const inputFive = [[-8, 10, -10], 1]; // 0
const inputSix = [[5, -10, 4, 3, 5, -9, 9, -7], 2]; // 23

console.log(maximumEnergy(...inputOne));
