/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanMap = [
    {
      char: "M",
      value: 1000,
    },
    {
      char: "CM",
      value: 900,
    },
    {
      char: "D",
      value: 500,
    },
    {
      char: "CD",
      value: 400,
    },
    {
      char: "C",
      value: 100,
    },
    {
      char: "XC",
      value: 90,
    },
    {
      char: "L",
      value: 50,
    },
    {
      char: "XL",
      value: 40,
    },
    {
      char: "X",
      value: 10,
    },
    {
      char: "IX",
      value: 9,
    },
    {
      char: "V",
      value: 5,
    },
    {
      char: "IV",
      value: 4,
    },
    {
      char: "III",
      vlaue: 3,
    },
    {
      char: "II",
      value: 2,
    },
    {
      char: "I",
      value: 1,
    },
  ];

  let left = num;
  let romanNumber = "";

  for (let i = 0; i < romanMap.length; i++) {
    if (left <= 0) {
      break;
    }

    const roman = romanMap[i];

    if (left >= roman.value) {
      left -= roman.value;
      i--;
      romanNumber += roman.char;
    }
  }

  return romanNumber;
};

const num = 1940;

console.log(intToRoman(num));
