let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

const board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function main(input) {
  const inputLines = input.split("\n");

  const totalTestCase = parseInt(inputLines[0]);

  for (let caseNo = 0; caseNo < totalTestCase; caseNo++) {
    // check a board
    let totalPoint = 0;

    for (let row = 0; row < 10; row++) {
      const rowLine = inputLines[10 * caseNo + row + 1].trim();

      for (let col = 0; col < 10; col++) {
        if (rowLine[col] === "X") {
          totalPoint += board[row][col];
        }
      }
    }

    console.log(totalPoint);
  }
}
