/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let total = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if (Math.abs(hours[i] + hours[j]) % 24 === 0) total++;
    }
  }

  return total;
};

const inputOne = [11, 11, 24];

console.log(countCompleteDayPairs([72, 48, 24, 3]));
