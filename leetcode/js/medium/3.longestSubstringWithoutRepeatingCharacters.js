const { green, white, red, yellow } = require("colors");

/**
 *
 * @param {string} s
 * @return {number}
 */
var lengthofLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const map = new Map();
  let maxLength = 0;
  let currentLenght = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      if (maxLength < currentLenght) {
        maxLength = currentLenght;
      }

      const prevIndex = map.get(char);
      map.clear();
      currentLenght = 0;
      i = prevIndex;
    } else {
      currentLenght++;
      map.set(char, i);
    }
  }

  return currentLenght > maxLength ? currentLenght : maxLength;
};

const data = [
  {
    caseName: "1",
    input: ["abcabcbb"],
    expected: 3,
  },
  {
    caseName: "2",
    input: ["bbbbb"],
    expected: 1,
  },
  {
    caseName: "3",
    input: ["pwwkew"],
    expected: 3,
  },
];

let totalFailed = 0;
let totalPass = 0;
const failedList = [];
const successList = [];

for (let singleCase of data) {
  const { caseName, input, expected } = singleCase;

  const result = lengthofLongestSubstring(...input);

  if (result === expected) {
    totalPass++;
    singleCase.result = result;
    successList.push(singleCase);
  } else {
    totalFailed++;
    failedList.push(singleCase);
  }
}

if (!totalFailed) {
  console.log(`> ${green("All Test Case is Passed")}`);
  console.log(`> Total Case : ${white(data.length)}`);
  console.log(`> Total Passed : ${green(totalPass)}`);
  console.log(`> Total Failed : ${red(totalFailed)}`);
} else {
  console.log("> " + red(`Total ${totalFailed} Test Case is Failed.`));
  console.log(`> Total Case : ${white(data.length)}`);
  console.log(`> Total Passed : ${green(totalPass)}`);
  console.log(`> Total Failed : ${red(totalFailed)}`);

  console.log("\n\n> Failed Test case : ");
  failedList.forEach(({ caseName, input, result, expected }) => {
    console.log(`> Case Name : ${caseName}`);
    console.log(`> Input : ${input}`);
    console.log(`> Output : ${result}`);
    console.log(`> Expected : ${expected}`);
    console.log(yellow("\n----------------------------\n"));
  });
}
