/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  let miniumPrice = Infinity;
  const allWorkerRatio = [];

  for (let i = 0; i < quality.length; i++) {
    allWorkerRatio.push([wage[i] / quality[i], quality[i]]);
  }

  // sort them all
  allWorkerRatio.sort((a, b) => a[0] - b[0]);

  const kGroup = [];
  let qualitySum = 0;

  // find the inital sum
  const firstMr = allWorkerRatio[k - 1][0];

  for (let w = 0; w < k; w++) {
    kGroup.push(allWorkerRatio[w][1]);
    qualitySum += allWorkerRatio[w][1];
  }

  miniumPrice = Math.min(miniumPrice, qualitySum * firstMr);

  for (let w = k; w < allWorkerRatio.length; w++) {
    const mr = allWorkerRatio[w][0];
    kGroup.push(allWorkerRatio[w][1]);
    qualitySum += allWorkerRatio[w][1];

    kGroup.sort((a, b) => a - b);
    qualitySum -= kGroup.pop();

    miniumPrice = Math.min(miniumPrice, mr * qualitySum);
  }

  return miniumPrice.toFixed(5);
};

const inputOne = [[10, 20, 5], [70, 50, 30], 2];
const inputTwo = [[3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3];

console.log(mincostToHireWorkers(...inputOne));
