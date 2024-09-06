let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input);
});

function main(input) {
  const word = input.trim();

  let l = 0;
  let u = 0;

  for (const char of word) {
    if (isUpper(char)) u++;
    else l++;
  }

  if (l === u) {
    console.log(word.toLowerCase());
  } else if (u > l) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}

function isUpper(char) {
  return char.toUpperCase() === char;
}
