/**
 *
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    const newArr = [];

    for (let i of obj) {
      if (Boolean(i)) {
        if (Array.isArray(i) || i.toString() === "[object Object]") {
          newArr.push(compactObject(i));
        } else {
          newArr.push(i);
        }
      }
    }

    return newArr;
  }

  // if it is object
  const newObject = {};

  for (let entrie of Object.entries(obj)) {
    const key = entrie[0];
    const value = entrie[1];

    if (Boolean(value)) {
      if (Array.isArray(value) || value.toString() === "[object Object]") {
        newObject[key] = compactObject(value);
      } else {
        newObject[key] = value;
      }
    }
  }

  return newObject;
};

const o = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(o));
