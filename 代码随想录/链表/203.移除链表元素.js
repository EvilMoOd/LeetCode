/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 可用迭代或者递归遍历，这里用迭代
  let newList = new ListNode(0, head)
  let node = newList;
  while (node.next) {
    node.next.val === val ? node.next = node.next.next : node = node.next;
  }
  return newList.next//返回首元节点
};
// @lc code=end

