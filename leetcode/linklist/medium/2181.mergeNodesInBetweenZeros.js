import { makeList } from "./../util.js";

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
var mergeNodes = function (head) {
  let current = head.next;
  let nodePoint = head;
  let sum = 0;

  while (current) {
    if (current.val) {
      sum += current.val;
    } else {
      nodePoint.val = sum;
      sum = 0;
      nodePoint.next = current;

      if (current.next) {
        nodePoint = current;
      }
    }

    current = current.next;
  }

  nodePoint.next = null;

  return head;
};

const inputOne = makeList([0, 3, 1, 0, 4, 5, 2, 0]);

const examine = inputOne;
examine.print();

const result = mergeNodes(examine);
result.print();
