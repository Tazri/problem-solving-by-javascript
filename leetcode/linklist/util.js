/**
 *
 * @param {number[]} arr
 * @return {ListNode}
 */
export function makeList(arr) {
  const head = new ListNode("head");
  let current = head;
  for (let item of arr) {
    current.next = new ListNode(item);
    current = current.next;
  }

  return head.next;
}

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  this.print = function () {
    const result = [];
    let current = this;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    console.log("[ " + result.join(" || ") + " ]");
  };
}
