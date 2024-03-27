/**
 *
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function (functions) {
  const resolved = [];
  let totalLeftToFinsih = functions.length;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      const fn = functions[i];

      fn()
        .then((data) => {
          totalLeftToFinsih--;
          resolved[i] = data;

          if (!totalLeftToFinsih) {
            resolve(resolved);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

const fns = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))];

promiseAll(fns).then(console.log).catch(console.log);
