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
var deleteDuplicates = function (head) {
  if (!head) return null;
  let prev = head;
  let current = head.next;
  let lastValue = head.val;

  while (current) {
    if (current.val === lastValue) {
      prev.next = null;
      current = current.next;
      continue;
    }

    prev.next = current;
    prev = current;
    lastValue = current.val;

    current = current.next;
  }
  return head;
};

const inputOne = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);

inputOne.print();

const result = deleteDuplicates(inputOne);
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
