import { ListNode, makeList } from "./../util.js";
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
var insertionSortList = function (head) {
  const root = new ListNode(-Infinity, head);

  function insert(node) {
    let prev = null;
    let current = root;

    while (current) {
      if (current.val >= node.val) {
        prev.next = node;
        node.next = current;
        break;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }

  let current = root.next;
  let prev = root;

  while (current) {
    if (prev.val > current.val) {
      let next = current.next;
      prev.next = next;
      insert(current);

      let newPrev = prev;
      if (current.next === next) {
        newPrev = current;
      }

      prev = newPrev;
      current = next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return root.next;
};

// const inputOne = makeList([4, 2, 1, 3]);
const inputOne = makeList([4, 2, 1, 3]);

inputOne.print();
const result = insertionSortList(inputOne);
result.print();
