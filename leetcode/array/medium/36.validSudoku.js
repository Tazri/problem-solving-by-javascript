/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const group = Array(10).fill(0);

  // row check
  for (const row of board) {
    for (const char of row) {
      if (char === ".") continue;
      const indx = parseInt(char);

      if (group[indx]) return false;
      group[indx] = indx;
    }
    group.fill(0);
  }

  // col check
  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      const char = board[row][col];

      if (char === ".") continue;
      const indx = parseInt(char);

      if (group[indx]) return false;
      group[indx] = indx;
    }
    group.fill(0);
  }

  // group check
  for (let r = 0; r < 3; r++) {
    const rp = r * 3;

    for (let c = 0; c < 3; c++) {
      const cp = c * 3;

      // traverse group
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const char = board[row + rp][col + cp];

          if (char === ".") continue;
          const i = parseInt(char);

          if (group[i]) return false;
          group[i] = i;
        }
      }

      group.fill(0);
    }
  }
  return true;
};

const inputOne = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const falseBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const inputThree = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

// console.log(isValidSudoku(inputOne));
// console.log(isValidSudoku(falseBoard));
console.log(isValidSudoku(inputThree));
