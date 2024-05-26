/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  // buttom up
  let t = Array(n + 1);
  const M = 1e9 + 7;

  for (let i = 0; i < t.length; i++) {
    t[i] = Array(2);

    for (let j = 0; j < t[i].length; j++) {
      t[i][j] = Array(3).fill(-1);
    }
  }

  // base case
  for (let a = 0; a <= 1; a++) {
    for (let l = 0; l <= 2; l++) {
      t[0][a][l] = 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let a = 0; a <= 1; a++) {
      for (let l = 0; l <= 2; l++) {
        let ans = t[i - 1][a][0];

        if (a + 1 <= 1) {
          ans += t[i - 1][a + 1][0] % M; // absent
        }

        if (l + 1 <= 2) {
          ans += t[i - 1][a][l + 1] % M; // late
        }

        t[i][a][l] = ans % M;
      }
    }
  }

  return t[n][0][0];
};

// recursive
var checkRecordRecursive = function (n) {
  let t = Array(n + 1);

  for (let i = 0; i < t.length; i++) {
    t[i] = Array(2);

    for (let j = 0; j < t[i].length; j++) {
      t[i][j] = Array(3).fill(-1);
    }
  }

  let M = 1e9 + 7;

  function solve(day = n, a = 0, l = 0) {
    if (a >= 2 || l >= 3) {
      return 0;
    }
    if (day === 0) {
      return 1;
    }

    if (t[day][a][l] !== -1) {
      return t[day][a][l];
    }

    let absentDay = solve(day - 1, a + 1, 0) % M;
    let lateDay = solve(day - 1, a, l + 1) % M;
    let presetDay = solve(day - 1, a, 0) % M;

    const result = (((absentDay + lateDay) % M) + presetDay) % M;
    t[day][a][l] = result;
    return result;
  }

  return solve();
};

const inputOne = 2; // 8
const inputTwo = 1; // 3
const inputThree = 3; // 19
const inputFour = 10; // 3536
const inputfive = 22; // 10906776
10906776;
const longInput = 10101; //  183236316

console.log(`input : ${inputOne} = ${checkRecord(inputOne)} || 8`);
console.log(`input : ${inputTwo} = ${checkRecord(inputTwo)} || 3`);
console.log(`input : ${inputThree} = ${checkRecord(inputThree)} || 19`);
console.log(`input : ${inputFour} = ${checkRecord(inputFour)} || 3536`);
console.log(`input : ${inputfive} = ${checkRecord(inputfive)} || 10906776`);
