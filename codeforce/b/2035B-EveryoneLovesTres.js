let input = "";

process.stdin.on("data", (data) => {
  input += data;
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
  const inputArr = inputLines.map((a) => parseInt(a.trim()));

  inputArr.shift();

  for (const len of inputArr) {
    console.log(get(len));
  }
}

function get(len) {
  if (len <= 1) return -1;
  if (len === 2) return 66;
  if (len === 3) return -1;

  if (len & 1) {
    const totalThree = len - 4;
    return "3".repeat(totalThree).concat("6366");
  }

  return "3".repeat(len - 2).concat("66");
}

main("6\n1\n2\n3\n4\n5\n6\n7");
