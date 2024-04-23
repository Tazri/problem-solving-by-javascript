/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = false;
  let pos = digits.length - 1;

  do {
    let num = digits[pos] + 1;

    if (num > 9) {
      digits[pos] = 0;
      pos--;
      carry = true;
    } else {
      digits[pos] += 1;
      carry = false;
    }

    if (pos < 0) {
      break;
    }
  } while (carry);

  if (carry) {
    digits.unshift(1);
  }

  return digits;
};

const digits = [9];

console.log(plusOne(digits));
