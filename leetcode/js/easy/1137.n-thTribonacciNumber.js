/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  }

  let first = 0;
  let sec = 1;
  let third = 1;
  let turn = 3;

  while (turn <= n) {
    // console.log(`turn ${turn}`);
    // console.log(`first : ${first}, sec : ${sec}, third : ${third}`);
    // console.log("--------");
    let temp = third;
    third = first + sec + third;
    first = sec;
    sec = temp;
    turn++;

    // console.log(`turn ${turn}`);
    // console.log(`first : ${first}, sec : ${sec}, third : ${third}`);
    // console.log("======\n");
  }

  return third;
};

const n = 25;

console.log(tribonacci(n));
