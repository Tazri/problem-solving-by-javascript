var Trie = function () {
  this.arr = new Array(26).fill(null);
  this.value = null;
  this.end = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentTrie = this;

  for (const char of word) {
    const charCode = code(char);

    if (currentTrie.arr[charCode]) {
      currentTrie = currentTrie.arr[charCode];
    } else {
      currentTrie.arr[charCode] = new Trie();
      currentTrie.value = char;
      currentTrie = currentTrie.arr[charCode];
    }
  }

  currentTrie.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentTrie = this;

  for (const char of word) {
    const charCode = code(char);

    if (currentTrie.arr[charCode]) {
      currentTrie = currentTrie.arr[charCode];
    } else {
      return false;
    }
  }

  return currentTrie.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentTrie = this;

  for (const char of prefix) {
    const charCode = code(char);

    if (currentTrie.arr[charCode]) {
      currentTrie = currentTrie.arr[charCode];
    } else {
      return false;
    }
  }

  return true;
};

/**
 *
 * @param {string} c
 * @return {number}
 */
function code(c) {
  return c.charCodeAt(0) - "a".charCodeAt(0);
}

// Your Trie object will be instantiated and called as such:
const word = "search";
var obj = new Trie();
obj.insert(word);
obj.insert("down");
obj.insert("sea");
obj.insert("up");
var param_2 = obj.search("u");
var param_3 = obj.startsWith("sear");

console.log(param_2);
console.log(param_3);
