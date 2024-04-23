/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  const time = s.split("");

  if (time[0] === "?") {
    if (time[1] === "?" || time[1] === "0" || time[1] === "1") {
      time[0] = "1";
    } else {
      time[0] = "0";
    }
  }

  if (time[1] === "?") {
    if (time[0] === "1") {
      time[1] = "1";
    } else {
      time[1] = "9";
    }
  }

  if (time[3] === "?") time[3] = "5";
  if (time[4] === "?") time[4] = "9";

  return time.join("");
};

const time = "?3:12";

console.log(findLatestTime(time));
