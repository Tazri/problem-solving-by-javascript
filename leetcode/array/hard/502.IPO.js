import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

class Project {
  /**
   *
   * @param {number} profits
   * @param {number} capital
   */
  constructor(profits, capital) {
    this.profit = profits;
    this.capital = capital;
  }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const projects = [];

  for (let i = 0; i < profits.length; i++) {
    projects.push(new Project(profits[i], capital[i]));
  }

  projects.sort((a, b) => {
    const diff = a.capital - b.capital;

    if (diff) return diff;

    return b.profit - a.profit;
  });

  let i = 0;
  let pq = new MaxPriorityQueue();
  while (k--) {
    while (i < profits.length && projects[i].capital <= w) {
      pq.enqueue(projects[i].profit);
      i++;
    }

    if (pq.isEmpty()) break;

    // w += pq.front() // leet code does not support it
    w += pq.front().element; // leet code support it
    pq.dequeue();
  }

  return w;
};

const inputOne = [2, 0, [1, 2, 3], [0, 1, 1]];

console.log(findMaximizedCapital(...inputOne));
