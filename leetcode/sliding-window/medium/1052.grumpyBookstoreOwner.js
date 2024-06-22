/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let max = 0;

  for (let i = 0; i < customers.length; i++) {
    if (!grumpy[i]) {
      max += customers[i];
    }
  }

  for (let i = 0; i < minutes; i++) {
    if (grumpy[i]) {
      max += customers[i];
    }
  }

  let total = max;
  for (let i = minutes, last = 0; i < grumpy.length; i++, last++) {
    const lastCustomer = customers[last];
    const customer = customers[i];

    if (grumpy[last]) {
      total -= lastCustomer;
    }

    if (grumpy[i]) {
      total += customer;
    }

    max = Math.max(total, max);
  }

  return max;
};

const inputOne = [[1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3];

console.log(maxSatisfied(...inputOne));
