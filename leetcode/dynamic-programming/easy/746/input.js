const readlineModule = require("readline");

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("It will  be print in terminal.", (inputData) => {
  console.log(inputData);
  readline.close();
});
