/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let time = customers[0][0];
  let sum = 0;

  for (const [startTime, needTime] of customers) {
    if (time > startTime) {
      const extra = time - startTime;
      time += needTime;
      sum += extra + needTime;
    } else {
      time = startTime + needTime;
      sum += needTime;
    }
  }

  return (sum / customers.length).toFixed(5);
};

const one = [
  [5, 2],
  [5, 4],
  [10, 3],
  [20, 1],
];

console.log(averageWaitingTime(one));
