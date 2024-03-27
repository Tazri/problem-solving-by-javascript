/**
 * @param {Function} fn
 * @return {Object
 * }
 */
Array.prototype.groupBy = function (fn) {
  const arr = this;
  const groupObject = {};

  for (let item of arr) {
    const key = fn(item);

    if (groupObject[key]) {
      groupObject[key].push(item);
    } else {
      groupObject[key] = [item];
    }
  }

  return groupObject;
};

const result = [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
  return item.id;
});
console.log(result);
