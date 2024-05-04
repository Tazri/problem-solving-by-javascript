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
  let carry = 0;
  let ptr1 = l1;
  let ptr2 = l2;

  const head = new ListNode();
  let current = head;

  while (ptr1 && ptr2) {
    let sum = ptr1.val + ptr2.val + carry;
    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    ptr1 = ptr1.next;
    ptr2 = ptr2.next;

    current = current.next;
  }

  let ptr = ptr1 || ptr2;

  while (ptr) {
    let sum = ptr.val + carry;
    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    ptr = ptr.next;
    current = current.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  this.print = () => {
    let current = this;
    let res = "";

    while (current) {
      res += current.val;
      current = current.next;
    }

    console.log(res);
  };
}

const inputOne = [
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4))),
];

const inputTwo = [
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  ),
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
];

const res = addTwoNumbers(...inputTwo);

res.print();
