/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    if (!stack.length) {
      stack.push(i);
    } else if (last() >= temperatures[i]) {
      stack.push(i);
    } else {
      while (last() < temperatures[i]) {
        let p = stack.pop();

        result[p] = i - p;

        if (!stack.length) break;
      }

      stack.push(i);
    }
  }

  function last() {
    return temperatures[stack[stack.length - 1]];
  }

  return result;
};

const t1 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(t1));
console.log([1, 1, 4, 2, 1, 1, 0, 0]);
