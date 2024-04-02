/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap.has(sChar) && tMap.has(tChar)) {
      const sValue = sMap.get(sChar);
      const tValue = tMap.get(tChar);

      if (tValue !== sChar || sValue !== tChar) {
        return false;
      }
    } else if (!sMap.has(sChar) && !tMap.has(tChar)) {
      tMap.set(tChar, sChar);
      sMap.set(sChar, tChar);
    } else {
      return false;
    }
  }

  return true;
};

const s = "egg";
const t = "add";

console.log(isIsomorphic(s, t));
