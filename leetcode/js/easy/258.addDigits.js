/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (!num) return 0;
  const remain = num % 9;
  return remain || 9;
};

console.log(addDigits(97));
