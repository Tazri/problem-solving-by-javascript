function longestSubarray(arr) {
  // Write your code here
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let select = null;
    let streak = 1;

    for (let j = i + 1; j < arr.length; j++, streak++) {
      if (arr[i] !== arr[j] && Math.abs(arr[i] - arr[j]) != 1) {
        break;
      } else if (arr[i] !== arr[j] && select === null) {
        select = arr[j];
      } else if (arr[j] !== arr[i] && arr[j] !== select) {
        break;
      }
    }

    max = Math.max(streak, max);

    if (arr.length - i <= max) break;
  }

  return max;
}

const input = [0, 1, 2, 1, 2, 3]; // 4

console.log(longestSubarray(input));
