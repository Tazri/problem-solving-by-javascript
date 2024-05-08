/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) return null;

  let back = head;
  let track = head;

  for (let i = 0; i < n; i++) {
    track = track.next;
  }

  // if track is null
  if (!track) {
    return back.next;
  }

  while (track.next) {
    back = back.next;
    track = track.next;
  }

  const removeNode = back.next;

  if (removeNode.next) {
    back.next = removeNode.next;
  } else {
    back.next = null;
  }

  return head;
};

const inputOne = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const inputTwo = new ListNode(1, new ListNode(2));

inputTwo.print();

const result = removeNthFromEnd(inputTwo, 1);

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
}
