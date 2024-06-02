/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const compressed = [];

  compressed.push(chars[0]);
  let last = chars[0];
  let times = 1;

  for (let i = 1; i < chars.length; i++) {
    if (last === chars[i]) {
      times++;
      continue;
    }

    if (times > 1) compressed.push(...("" + times).split(""));
    times = 1;
    last = chars[i];
    compressed.push(last);
  }

  if (times > 1) compressed.push(...("" + times).split(""));

  while (chars.length > compressed.length) {
    chars.pop();
  }

  for (let i = 0; i < chars.length; i++) {
    chars[i] = compressed[i];
  }

  return chars.length;
};

const inputOne = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
];

console.log(compress(inputOne));

// TODO : to this thing osing O(1) space complexity
