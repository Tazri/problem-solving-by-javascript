/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends);
  const queue = [["0000", 0]];

  if (visited.has("0000")) return -1;

  while (queue.length) {
    const [lock, turn] = queue.shift();

    if (target === lock) {
      return turn;
    }

    const nextLocks = getNexNeighbours(lock);

    for (const nextLock of nextLocks) {
      if (!visited.has(nextLock)) {
        visited.add(nextLock);
        queue.push([nextLock, turn + 1]);
      }
    }
  }

  return -1;
};

function getNexNeighbours(str) {
  let first = parseInt(str[0]);
  let second = parseInt(str[1]);
  let third = parseInt(str[2]);
  let forth = parseInt(str[3]);

  return [
    plus(first) + str.slice(1),
    minus(first) + str.slice(1),
    str[0] + plus(second) + str.slice(2),
    str[0] + minus(second) + str.slice(2),
    str.slice(0, 2) + plus(third) + str[3],
    str.slice(0, 2) + minus(third) + str[3],
    str.slice(0, 3) + plus(forth),
    str.slice(0, 3) + minus(forth),
  ];
}

function plus(n) {
  return n + 1 > 9 ? 0 : n + 1;
}

function minus(n) {
  return n - 1 < 0 ? 9 : n - 1;
}

const deadends = [
  "8887",
  "8889",
  "8878",
  "8898",
  "8788",
  "8988",
  "7888",
  "9888",
];
const target = "8888";

console.log(openLock(deadends, target));
