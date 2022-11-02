/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) head;
  let left = head,
    right = head;
  while (n) {
    right = right.next;
    n--;
  }
  if (!right) return head.next;//排除只有一个元素的情况
  while (right.next) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return head;
  // 双指针定位到删除元素的前一个元素，改变指针指向即可
};
// @lc code=end
