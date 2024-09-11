let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const inputLines = input.split("\n");
  const colors = "CMY";

  const firstLine = inputLines[0].trim().split(" ");

  const row = parseInt(firstLine[0]);

  let isColored = false;
  for (let i = 1; i <= row; i++) {
    const line = inputLines[i];
    let isRowColor = false;

    for (const char of line) {
      if (colors.includes(char)) {
        isColored = true;
        isRowColor = false;
        break;
      }
    }

    if (isRowColor) {
      break;
    }
  }

  if (isColored) {
    console.log("#Color");
  } else {
    console.log("#Black&White");
  }
}
