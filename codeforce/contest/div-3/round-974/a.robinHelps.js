let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const linesArr = input.split("\n").map((l) => l.trim());

  const testCase = parseInt(linesArr.shift());

  for (let i = 0; i < testCase; i++) {
    const [n, k] = linesArr
      .shift()
      .split(" ")
      .map((num) => parseInt(num));
    const arr = linesArr
      .shift()
      .split(" ")
      .map((num) => parseInt(num));

    const result = program(n, k, arr);
    console.log(result);
  }
}

function program(n, k, arr) {
  let totalGorib = 0;
  let steal = 0;

  for (const a of arr) {
    if (a >= k) {
      steal += a;
    } else if (a === 0) {
      if (steal) {
        totalGorib++;
        steal--;
      }
    }
  }

  return totalGorib;
}
