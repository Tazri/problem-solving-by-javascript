/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const board = Array(9).fill(0);
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let player = "A";
  for (const move of moves) {
    board[move[0] * 3 + move[1]] = player;
    player = player === "A" ? "B" : "A";
  }

  for (const [ai, bi, ci] of winningPattern) {
    if (board[ci] !== 0 && board[ai] === board[bi] && board[bi] === board[ci]) {
      return board[ai];
    }
  }

  if (moves.length === 9) return "Draw";
  return "Pending";
};

const inputOne = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];
console.log(tictactoe(inputOne));
