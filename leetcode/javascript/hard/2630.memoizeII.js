// TODO : optimize
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const outputs = [];
  const inputs = {};
  let nextOuputsId = 0;

  function storeInputs(args) {
    let id = nextOuputsId;
    nextOuputsId++;

    if (inputs[args.length]) {
      inputs[args.length].push([args, id]);
    } else {
      inputs[args.length] = [[args, id]];
    }

    return id;
  }

  function getOutputId(args) {
    if (!inputs[args.length]) return -1;

    const allInputs = inputs[args.length];
    let i = 0;

    while (i < allInputs.length) {
      const input = allInputs[i][0];
      let isEqual = true;

      for (let j = 0; j < input.length; j++) {
        if (input[j] === args[j]) continue;
        isEqual = false;
        break;
      }

      if (isEqual) break;
      i++;
    }

    if (i >= allInputs.length) {
      return -1;
    }
    return allInputs[i][1];
  }

  return function (...args) {
    const id = getOutputId(args);

    if (id === -1) {
      storeInputs(args);
      const output = fn(...args);
      outputs.push(output);
      return output;
    }

    console.log(inputs);
    return outputs[id];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
let res = memoizedFn(2, 3); // 5
console.log(res);
res = memoizedFn(2, 3); // 5
console.log(res);
res = memoizedFn(3, 10);
console.log(res);
res = memoizedFn(3, 10);
console.log(res);
res = memoizedFn(2, 3); // 5
console.log(res);
console.log(callCount); // 1
