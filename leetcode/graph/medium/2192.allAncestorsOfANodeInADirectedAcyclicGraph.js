/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const graph = new Array(n);
  let i = n;

  while (i--) {
    graph[i] = [];
  }

  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  const ancestors = new Array(n);
  i = n;
  while (i--) {
    ancestors[i] = [];
  }

  function dfs(start, source) {
    const neighbors = graph[start];

    for (const neighbor of neighbors) {
      const ancestor = ancestors[neighbor];
      const last = ancestor[ancestor.length - 1];

      if (last !== source) {
        ancestors[neighbor].push(source);
        dfs(neighbor, source);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(i, i);
  }

  return ancestors;
};

const one = [
  8,
  [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ],
];

console.log(getAncestors(...one));
