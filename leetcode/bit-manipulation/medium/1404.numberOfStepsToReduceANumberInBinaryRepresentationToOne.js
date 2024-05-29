/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  if (s === "0") return 1;
  let number = s.split("");
  let len = number.length;
  let move = 0;

  while (number.length !== 1) {
    if (number[len - 1] === "0") {
      number.pop();
      len--;
    } else {
      let i = len - 1;
      for (; i >= 0; i--) {
        if (number[i] === "1") {
          number[i] = "0";
        } else {
          number[i] = "1";
          break;
        }
      }

      if (i < 0) {
        number.unshift("1");
        len++;
      }
    }

    move++;
  }

  if (number[0] !== "1") move++;
  return move;
};

const inputOne = "1111011110000011100000110001011011110010111001010111110001"; // 85

console.log(numSteps(inputOne));
