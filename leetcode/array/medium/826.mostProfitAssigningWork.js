class Job {
  /**
   *
   * @param {number} diff
   * @param {number} prof
   */
  constructor(diff, prof) {
    this.diff = diff;
    this.prof = prof;
  }
}

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const jobs = [];

  for (let i = 0; i < difficulty.length; i++) {
    jobs.push(new Job(difficulty[i], profit[i]));
  }

  jobs.sort((jobA, jobB) => {
    return jobA.diff - jobB.diff;
  });

  // pre prossessing
  let max = -Infinity;
  for (let i = 0; i < jobs.length; i++) {
    const profit = jobs[i].prof;
    max = Math.max(max, profit);
    jobs[i].prof = max;
  }

  let totalProfit = 0;
  for (let i = 0; i < jobs.length; i++) {
    let workerDiff = worker[i];

    let left = 0;
    let right = jobs.length - 1;
    let maxProfit = 0;

    while (left <= right) {
      let mid = Math.trunc(left + (right - left) / 2);

      if (jobs[mid].diff <= workerDiff) {
        maxProfit = Math.max(maxProfit, jobs[mid].prof);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    totalProfit += maxProfit;
  }

  return totalProfit;
};

const inputone = [
  [2, 4, 6, 8, 10],
  [10, 20, 30, 40, 50],
  [4, 5, 6, 7],
];

console.log(maxProfitAssignment(...inputone));
