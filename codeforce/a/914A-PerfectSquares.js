let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

/**
 *
 * @param {string} input
 */
function main(input) {
  const inputLines = input.split("\n").filter(Boolean);
  const inputArr = inputLines[1]
    .trim()
    .split(" ")
    .map((n) => parseInt(n));

  const result = inputArr.reduce((max, a) => {
    if (!Number.isInteger(Math.sqrt(a))) {
      return max ? Math.max(max, a) : a;
    }

    return max;
  }, null);

  console.log(result);
}

main("3\n-1 -4 -9");
