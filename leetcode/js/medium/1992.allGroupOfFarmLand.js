/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const maxRow = land.length - 1;
  const maxCol = land[0].length - 1;
  const output = [];

  for (let r = 0; r <= maxRow; r++) {
    for (let c = 0; c <= maxCol; c++) {
      if (!land[r][c]) continue;

      const l = [r, c];
      dfs(r, c, land, l);

      output.push(l);

      //   console.log("==========\n\n");
    }
  }

  return output;
};

function dfs(r, c, land, output) {
  //   console.log(`r : ${r}, c : ${c}`);
  if (!land[r]) return;

  if (!land[r][c]) return;
  //   console.log(`land[${r}][${c}] = ${land[r][c]}`);

  land[r][c] = null;

  const down = land[r + 1]
    ? land[r + 1][c] === null || land[r + 1][c] === 1
      ? true
      : false
    : false;

  const left = land[r][c + 1] === null || land[r][c + 1] === 1 ? true : false;

  //   console.log(`down : ${down}, left : ${left}`);

  //   console.log("------------\n");
  if (!down && !left) {
    output.push(r);
    output.push(c);
  }
  dfs(r + 1, c, land, output);
  dfs(r, c + 1, land, output);
}

const gridOne = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 1],
];

const gridTwo = [
  [1, 1],
  [1, 1],
];

const gridThree = [[0]];

console.log(findFarmland(gridOne));
