/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return null;
  let t = head;
  let h = head;

  while (true) {
    if (!t.next) {
      return null;
    }

    if (h.next === null || h.next.next === null) {
      return null;
    }

    t = t.next;
    h = h.next.next;

    if (t === h) break;
  }

  t = head;

  while (true) {
    if (t === h) break;
    t = t.next;
    h = h.next;
  }

  return t;
};

function getInputOne() {
  const three = new ListNode(3);
  const two = new ListNode(2);
  three.next = two;
  const zero = new ListNode(0);
  two.next = zero;

  const minusFour = new ListNode(-4);

  zero.next = minusFour;
  minusFour.next = two; // cycle

  return three;
}

function getInputTwo() {
  const one = new ListNode(1);
  const two = new ListNode(2);

  one.next = two;
  two.next = one;
  return one;
}

console.log(detectCycle(getInputTwo()));

function ListNode(val) {
  this.val = val;
  this.next = null;
}
