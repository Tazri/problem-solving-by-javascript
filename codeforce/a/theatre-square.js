let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const numbers = input.trim().split(" ");

  const a = parseInt(numbers[0]);
  const b = parseInt(numbers[1]);
  const c = parseInt(numbers[2]);
  const area = a * b;

  if (c === 1) {
    console.log(area);
    return;
  }

  if (a <= c || b <= c) {
    const maxSide = Math.max(a, b);

    console.log(Math.ceil(maxSide / c));
    return;
  }

  let maxSide = Math.max(a, b);
  let minSide = Math.min(a, b);
  let needTileForRow = Math.ceil(maxSide / c);
  let needRow = Math.ceil(minSide / c);
  let needTile = needTileForRow * needRow;

  console.log(needTile);
}

main("2 9 4");
main("6 6 4");
