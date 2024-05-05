/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let current = node;

  while (current.next) {
    let next = current.next;

    current.val = next.val;
    if (!next.next) {
      break;
    }

    current = next;
  }

  current.next = null;
};

function getInputOne() {
  const four = new ListNode(4);
  const five = new ListNode(5);
  const one = new ListNode(1);
  const nine = new ListNode(9);

  four.next = five;
  five.next = one;
  one.next = nine;

  return [four, five];
}

const [four, five] = getInputOne();

four.print();

console.log("After delting five");

deleteNode(five);

four.print();

function ListNode(val) {
  this.val = val;
  this.next = null;

  this.print = function () {
    let current = this;
    let values = "[";

    while (current) {
      values += " " + current.val + " ";
      current = current.next;
    }

    values += "]";

    console.log(values);
  };
}
