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
  let newList = new ListNode(0, head), node = newList;
  while (node.next && node.next.next) {
    let pre = node.next, cur = node.next.next;//链表顺序为 node，pre，cur
    pre.next = cur.next;//先把cur.next给用了
    cur.next = pre;
    node.next = cur;
    node = pre;
  } 
  return newList.next
};
// @lc code=end

