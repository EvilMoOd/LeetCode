/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
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
  const preHead = new ListNode(0, head);
  let pre = preHead;
  while (pre.next && pre.next.next) {
    let node1 = pre.next;
    let node2 = pre.next.next;
    pre.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    pre = pre.next.next;
  }
  return preHead.next;
  // 本题用到头结点去进行链表的位置互换，具体表现为
  // pre->node1->node2->node3,next指针变换顺序为：0->2,1->3,2->1
};
// @lc code=end
