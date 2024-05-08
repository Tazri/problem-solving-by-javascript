/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stackOne = [];
  const stackTwo = [];

  // store l1
  let current = l1;
  while (current) {
    stackOne.push(current);
    current = current.next;
  }

  current = l2;
  while (current) {
    stackTwo.push(current);
    current = current.next;
  }

  let carry = 0;
  let head = null;

  while (stackOne.length || stackTwo.length) {
    let num1 = stackOne.pop();
    let num2 = stackTwo.pop();

    num1 = num1 ? num1.val : 0;
    num2 = num2 ? num2.val : 0;
    const sum = num1 + num2 + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    head = new ListNode(digit, head);
  }

  if (carry) {
    head = new ListNode(carry, head);
  }

  return head;
};

const inputOne = [
  new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3)))),
  new ListNode(5, new ListNode(6, new ListNode(4))),
];

inputOne[0].print();
inputOne[1].print();

const result = addTwoNumbers(...inputOne);

result.print();

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  this.print = function () {
    const result = [];
    let current = this;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    console.log("[ " + result.join(" || ") + " ]");
  };
}
