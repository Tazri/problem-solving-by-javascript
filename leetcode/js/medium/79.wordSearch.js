class Graph {
  /**
   *
   * @param {string[][]} arr
   * @param {string}
   */
  constructor(arr, word) {
    this.graph = arr;
    this.maxRow = arr.length - 1;
    this.maxCol = arr[0].length - 1;
    this.legalChar = new Map();
    this.legalVertexs = new Set();
    this.rootChar = word[0];
    this.rootVertexs = [];
    this.seenVertexs = new Set();
    this.word = word;
    this.found = false;

    for (let char of word) {
      this.legalChar.set(char, false);
    }
  }

  get(col, row) {
    return this.graph[row][col];
  }

  isAllCharFound() {
    return [...this.legalChar.values()].every(Boolean);
  }

  getNeighbors(col, row) {
    const up = [col, row - 1];
    const down = [col, row + 1];
    const left = [col - 1, row];
    const right = [col + 1, row];

    const vertexs = [];

    if (row > 0 && this.check(...up)) vertexs.push(up);
    if (row < this.maxRow && this.check(...down)) vertexs.push(down);
    if (col > 0 && this.check(...left)) vertexs.push(left);
    if (col < this.maxCol && this.check(...right)) vertexs.push(right);

    return vertexs;
  }

  getUnseenNeighbors(col, row) {
    const allneighbors = this.getNeighbors(col, row);

    return allneighbors.filter((vertex) => !this.isSeen(...vertex));
  }

  seen(col, row) {
    this.seenVertexs.add(`${col},${row}`);
  }

  unSeen(col, row) {
    this.seenVertexs.delete(`${col},${row}`);
  }

  isSeen(col, row) {
    return this.seenVertexs.has(`${col},${row}`);
  }

  clearSeen() {
    this.seenVertexs.clear();
  }

  allowed(col, row) {
    this.legalVertexs.add(`${col},${row}`);
  }

  check(col, row) {
    return this.legalVertexs.has(`${col},${row}`);
  }

  filter() {
    for (let row = 0; row < this.graph.length; row++) {
      for (let col = 0; col < this.graph[row].length; col++) {
        const char = this.get(col, row);

        if (this.legalChar.has(char)) {
          this.legalChar.set(char, true);
          this.allowed(col, row);

          if (char === this.rootChar) {
            this.rootVertexs.push([col, row]);
          }
        }
      }
    }
  }

  find(root, depth, currentPos, nextPos) {
    if (depth <= 0 || this.found) {
      this.found = true;
      return true;
    }

    this.seen(...root);
    const neighbors = this.getUnseenNeighbors(...root);

    const nextChar = this.word[nextPos];

    // test code
    // console.log(
    //   `Root : ${root} | value : ${this.get(...root)} | nextWillbe : ${nextChar}`
    // );
    // console.log("seen : ");
    // console.log(this.seenVertexs);

    // console.log("----------------------------");
    // for (let n of neighbors) {
    //   console.log(`vertex : ${n} | value ${this.get(...n)}`);
    // }
    // console.log("*******\n");

    // finish test code
    for (let n of neighbors) {
      const char = this.get(...n);
      const nextChar = this.word[nextPos];

      if (char === nextChar) {
        let find = this.find(n, depth - 1, nextPos, nextPos + 1);

        if (find) {
          return true;
        }
      }
    }

    this.unSeen(...root);
    return this.found;
  }
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const graph = new Graph(board, word);

  graph.filter();

  if (!graph.isAllCharFound()) {
    return false;
  }

  const roots = graph.rootVertexs;

  for (let root of roots) {
    const isFound = graph.find(root, word.length - 1, 0, 1);

    if (isFound) return true;
    else graph.clearSeen();
  }

  // console.log("\n\n=====================\n");

  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCB";

console.log(exist(board, word));

/**
After submit first failed
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCESEEEFS";

*/
