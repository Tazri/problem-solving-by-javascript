/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  const stack = [];
  let current = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  let carry = 0;
  let left = null;

  while (stack.length) {
    const node = stack.pop();

    // get the value and multiply by 2
    const result = node.val * 2 + carry;
    const digit = result % 10;
    carry = Math.floor(result / 10);

    // update left
    left = new ListNode(digit, left);
  }

  if (carry) {
    left = new ListNode(carry, left);
  }

  return left;
};

const inputOne = new ListNode(9, new ListNode(9, new ListNode(9)));

const result = doubleIt(inputOne);

result.print();

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.print = () => {
    let current = this;
    let items = [];

    while (current) {
      items.push(current.val);
      current = current.next;
    }

    console.log("[ " + items.join(" || ") + " ]");
  };

  this.toString = () => {
    return "" + this.val;
  };
}
