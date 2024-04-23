/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode(null);
  let li1 = list1;
  let li2 = list2;

  let current = head;
  while (li1 && li2) {
    if (li1.val === li2.val) {
      current.next = new ListNode(li1.val, new ListNode(li2.val));
      current = current.next.next;
      li1 = li1.next;
      li2 = li2.next;
    } else if (li1.val < li2.val) {
      current.next = new ListNode(li1.val);
      current = current.next;
      li1 = li1.next;
    } else {
      current.next = new ListNode(li2.val);
      current = current.next;
      li2 = li2.next;
    }
  }

  while (li1) {
    current.next = new ListNode(li1.val);
    current = current.next;
    li1 = li1.next;
  }

  while (li2) {
    current.next = new ListNode(li2.val);
    current = current.next;
    li2 = li2.next;
  }

  return head.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  this.print = () => {
    let l = this;
    while (l) {
      console.log(l.val);
      l = l.next;
    }
  };
}
