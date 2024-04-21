/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // make graph
  const graph = [];

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  let found = false;

  function dfs(vertex) {
    if (found) return;

    if (vertex === destination) {
      found = true;
      return;
    }

    // get neighbours
    const neighbours = graph[vertex];

    if (neighbours === null) {
      return;
    }

    graph[vertex] = null;

    for (const v of neighbours) {
      dfs(v);
    }
  }

  dfs(source);

  return found;
};

const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];

console.log(validPath(6, edges, 3, 5));
