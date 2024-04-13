/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  for (let i = 0; i < sandwiches.length; i++) {
    let sndws = sandwiches[i];

    // find the student to get this sandwich
    // console.log(sandwiches);
    // console.log(`select : ${sndws}`);
    let found = false;
    for (let j = 0; j < students.length; j++) {
      // console.log("student line is : ");
      // console.log(students);
      let student = students.shift();

      if (student === sndws) {
        // console.log(`found student : ${student}`);
        found = true;
        break;
      } else {
        // console.log(`student : ${student}`);
        students.push(student);
        // console.log(`update student line : ${students}`);
      }
    }

    if (!found) {
      break;
    }
    // console.log("---------\n\n");
  }
  return students.length;
};

const students = [1, 1, 0, 0];
const sandwiches = [0, 1, 0, 1];

console.log(countStudents(students, sandwiches));
