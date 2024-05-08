/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let t = head;
  let h = head;

  while (true) {
    if (!t.next) return false;

    if (h.next === null || h.next.next === null) return false;

    // update
    t = t.next;
    h = h.next.next;
    if (t === h) return true;
  }
};

console.log(hasCycle(getInputOne()));

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

function ListNode(val) {
  this.val = val;
  this.next = null;
}
