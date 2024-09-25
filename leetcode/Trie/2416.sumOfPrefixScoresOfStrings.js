class Trie {
  constructor() {
    this.arr = new Array(26).fill(null);
    this.count = 0;
  }

  insert(word) {
    let cur = this;

    for (const char of word) {
      const index = pos(char);

      // update cur
      if (!cur.arr[index]) {
        cur.arr[index] = new Trie();
      }

      cur = cur.arr[index];
      cur.count += 1;
    }
  }

  countPrefix(word) {
    let cur = this;
    let sum = 0;

    for (const char of word) {
      const index = pos(char);

      cur = cur.arr[index];
      sum += cur.count;
    }

    return sum;
  }
}

/**
 *
 * @param {string} a
 * @return string
 */
function pos(a) {
  return a.charCodeAt(0) - "a".charCodeAt(0);
}

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  const answer = [];

  for (const word of words) {
    answer.push(trie.countPrefix(word));
  }

  return answer;
};

const input = ["abc", "ab", "bc", "b"];
const result = sumPrefixScores(input);
console.log(result);
