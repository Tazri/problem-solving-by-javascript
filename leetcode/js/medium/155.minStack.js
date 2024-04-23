var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.stack.length) {
    this.stack.push(val);
    this.minStack.push(val);
    return;
  }

  this.stack.push(val);
  const min = this.getMin();

  if (val <= min) this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popValue = this.stack.pop();

  if (popValue === this.getMin()) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
*/

const s = new MinStack();
console.log(null);

console.log(s.push(-2));
console.log(s.push(0));
console.log(s.push(-3));
console.log(s.getMin());
console.log(s.pop());
console.log(s.top());
console.log(s.getMin());

console.log([null, null, null, null, -3, null, 0, -2]);
