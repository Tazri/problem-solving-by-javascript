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
var removeNodes = function (head) {
  // collect the all node to stack
  const stack = [];

  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  let last = stack.pop();

  while (stack.length) {
    const peak = stack.pop();

    if (peak.val < last.val) continue;

    peak.next = last;
    last = peak;
  }

  return last;
};

const inputOne = new ListNode(
  5,
  new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8))))
);

const head = removeNodes(inputOne);

head.print();

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
