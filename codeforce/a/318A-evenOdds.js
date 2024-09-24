let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(lines) {
  const [l, n] = lines
    .trim()
    .split(" ")
    .map((a) => parseInt(a));

  const half = Math.ceil(l / 2);

  if (n <= half) {
    console.log(2 * n - 1);
  } else {
    console.log(2 * (n - half));
  }
}

main("10 3");
main("7 7");
