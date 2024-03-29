/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const allObject = {};

  for (let obj of arr1) {
    allObject[obj.id] = obj;
  }

  for (let obj of arr2) {
    if (allObject[obj.id]) {
      allObject[obj.id] = { ...allObject[obj.id], ...obj };
    } else {
      allObject[obj.id] = obj;
    }
  }

  return Object.values(allObject);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
