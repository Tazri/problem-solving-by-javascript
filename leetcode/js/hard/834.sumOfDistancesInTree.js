/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  if (n == 1) return [0];
  if (n == 2) return [1, 1];

  const graph = Array(n);
  const count = Array(n).fill(0);

  // ready the graph
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
  }

  // calculate rootCost and count
  function dfs(root, depth = 0, parent = -1) {
    count[0] += depth;

    let totalChild = 0;
    for (const child of graph[root]) {
      if (child != parent) {
        totalChild += dfs(child, depth + 1, root);
      }
    }

    if (parent != -1) {
      count[root] += totalChild + 1;
    }
    return count[root];
  }

  dfs(0);

  // calculate result
  function dfsCost(root, parent = -1) {
    // if  it's not root node then calculate the cost
    if (root > 0) {
      // calculate cost
      count[root] = count[parent] - count[root] + (n - count[root]);
    }

    for (let child of graph[root]) {
      if (child != parent) {
        dfsCost(child, root);
      }
    }
  }

  dfsCost(0);
  return count;
};

const inputOne = [
  6,
  [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
];

const inputTwo = [
  3,
  [
    [2, 0],
    [1, 0],
  ],
];

const inputThree = [
  4,
  [
    [1, 2],
    [3, 2],
    [3, 0],
  ],
];

console.log(sumOfDistancesInTree(...inputThree));
