/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // if matrix is square
  if (matrix.length === matrix[0].length) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix.length; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    return matrix;
  }

  // if are not square
  const transposeMatrix = Array(matrix[0].length);

  for (let i = 0; i < transposeMatrix.length; i++) {
    transposeMatrix[i] = Array(matrix.length).fill(0);
  }

  for (let r = 0; r < transposeMatrix.length; r++) {
    for (let c = 0; c < transposeMatrix[0].length; c++) {
      transposeMatrix[r][c] = matrix[c][r];
    }
  }

  return transposeMatrix;
};

const inputOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const inputTwo = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(inputTwo));
[
  [1, 4],
  [2, 5],
  [3, 6],
];
