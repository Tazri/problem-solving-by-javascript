process.stdin.setEncoding("utf8");

process.stdin.on("data", function (input) {
  console.log(input);
});
