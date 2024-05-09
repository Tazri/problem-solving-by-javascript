/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // transpose the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse every row
  for (let row of matrix) row.reverse();

  return matrix;
};

var rotateNotInPlace = function (matrix) {
  // copy the matrix
  const draft = [];
  for (const row of matrix) {
    draft.push([...row]);
  }

  for (let c = matrix.length - 1; c >= 0; c--) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][c] = draft[matrix.length - 1 - c][r];
    }
  }

  return matrix;
};

const inputOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(inputOne));
