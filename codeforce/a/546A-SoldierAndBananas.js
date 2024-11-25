let input = "";

process.stdin.on("data", (data) => {
  input += data;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const inputLines = input.split("\n");
  const [k, has, wants] = inputLines[0]
    .trim()
    .split(" ")
    .map((a) => parseInt(a));

  const totalPrice = ((wants * (wants + 1)) / 2) * k;

  const need = Math.max(totalPrice - has, 0);
  console.log(need);
}

main("3 17 4");
