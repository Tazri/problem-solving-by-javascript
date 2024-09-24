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

    const result = program(n, k);
    console.log(result);
  }
}

function program(n, k) {
  const start = n - k + 1;
  const end = n;
  const totalDays = end - start + 1;

  const dif = end - start + 1;
  let evenCount = 0;
  let oddCount = 0;
  if (dif % 2 == 0) {
    evenCount = dif / 2;
    oddCount = dif - evenCount;
  } else {
    if (start % 2 == 0) {
      evenCount = Math.ceil(dif / 2);
      oddCount = dif - evenCount;
    } else {
      oddCount = Math.ceil(dif / 2);
      evenCount = dif - oddCount;
    }
  }

  if (oddCount & 1) {
    return "NO";
  } else {
    return "YES";
  }
}
