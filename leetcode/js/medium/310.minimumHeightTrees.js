/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const graph = Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = new Set();
  }

  for (const [from, to] of edges) {
    graph[from].add(to);
    graph[to].add(from);
  }

  let queue = [];

  // collect leaves
  for (let i = 0; i < n; i++) {
    if (graph[i].size === 1) {
      queue.push(i);
    }
  }

  // now remove leave one by one
  let remain = n;
  while (remain > 2) {
    remain -= queue.length;
    const temp = [];

    while (queue.length) {
      const from = queue.shift();
      const vertex = graph[from];

      for (let to of vertex) {
        graph[to].delete(from);
        graph[from].delete(to);

        if (graph[to].size <= 1) {
          temp.push(to);
        }
      }
    }

    queue = temp;
  }

  if (remain == 1) {
    return [queue[0]];
  }

  return queue;
};
const n = 6;
const edges = [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
];

console.log(findMinHeightTrees(n, edges));
