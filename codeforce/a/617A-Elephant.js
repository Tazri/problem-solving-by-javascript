let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const n = parseInt(input.trim());

  const result = parseInt(n / 5) + (n % 5 ? 1 : 0);

  console.log(result);
}
