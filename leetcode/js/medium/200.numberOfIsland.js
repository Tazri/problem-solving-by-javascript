/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let totalIsland = 0;
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;

  function bfs(row, col) {
    const isIsland = grid[row][col];

    if (isIsland === "0") return;

    grid[row][col] = "0";

    // get neighbors and traverse

    // up
    if (row > 0) {
      bfs(row - 1, col);
    }

    // down
    if (row < maxRow) {
      bfs(row + 1, col);
    }

    // left
    if (0 < col) {
      bfs(row, col - 1);
    }

    // right
    if (col < maxCol) {
      bfs(row, col + 1);
    }
  }

  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      const isIsland = grid[row][col];

      if (isIsland !== "0") {
        bfs(row, col);
        totalIsland++;
      }
    }
  }

  return totalIsland;
};

const gridOne = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const gridTwo = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const gridThree = [["1"]];

console.log(numIslands(gridTwo));
