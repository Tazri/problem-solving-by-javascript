/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let d = 1;
  let node = head.next;
  const distances = [];
  let prev = head;

  while (node.next) {
    const prevValue = prev.val;
    const currValue = node.val;
    const nextValue = node.next.val;

    if (prevValue > currValue && currValue < nextValue) {
      distances.push(d);
    } else if (prevValue < currValue && currValue > nextValue) {
      distances.push(d);
    }

    d++;
    prev = node;
    node = node.next;
  }

  const len = distances.length;
  if (len <= 1) {
    return [-1, -1];
  } else if (len === 2) {
    const diff = distances[1] - distances[0];
    return [diff, diff];
  }
  const maxDiff = distances[len - 1] - distances[0];
  let minDiff = maxDiff;

  for (let i = 1; i < len; i++) {
    const diff = distances[i] - distances[i - 1];

    minDiff = Math.min(minDiff, diff);
  }

  return [minDiff, maxDiff];
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function makeList(arr) {
  const nodes = [];

  for (const item of arr) {
    const node = new ListNode(item);
    nodes.push(node);
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    const next = nodes[i + 1];
    nodes[i].next = next;
  }

  return nodes[0];
}

const input = [5, 3, 1, 2, 5, 1, 2];

const list = makeList(input);

/**
 *
 * @param {ListNode} node
 * @return {void}
 */
function traverse(node) {
  const item = [];

  while (node) {
    item.push(node.val);
    node = node.next;
  }

  console.log(item.join(" || "));
}

console.log(nodesBetweenCriticalPoints(list));
