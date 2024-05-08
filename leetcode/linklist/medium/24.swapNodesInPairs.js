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
var swapPairs = function (head) {
  // get next
  if (!head) return head;
  if (!head.next) return head;

  const first = head;
  const second = first.next;
  const third = second.next;

  // swap
  second.next = first;

  const thirdSwaped = swapPairs(third);
  first.next = thirdSwaped;

  return second;
};

const inputOne = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);

const inputTwo = new ListNode(1);

inputTwo.print();

const result = swapPairs(inputTwo);

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
