/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let move = 0;
  seats.forEach((pos, idx) => {
    move += Math.abs(pos - students[idx]);
  });

  return move;
};

const inputOne = [
  [3, 1, 5],
  [2, 7, 4],
];

console.log(minMovesToSeat(...inputOne));
