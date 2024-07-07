/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = numBottles;
  let total = numBottles;

  while (empty >= numExchange) {
    // get exchange
    const newBottle = Math.trunc(empty / numExchange);
    empty %= numExchange;

    empty += newBottle;
    total += newBottle;
  }

  return total;
};

const one = [15, 4];

console.log(numWaterBottles(...one));
