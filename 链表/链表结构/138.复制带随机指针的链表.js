/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return head;

  let curr = head;
  let newHead = new Node();
  let newCurr = newHead;
  let map = new Map();

  while (curr) {
    // 新链表复制 val 值和 next 指向
    newCurr.val = curr.val;
    newCurr.next = curr.next ? new Node() : null;
    map.set(curr, newCurr); // 把 newCurr 的值存起来
    newCurr = newCurr.next;
    curr = curr.next;
  }

  newCurr = newHead;
  while (head) {
    // 通过引用地址找到对应的链表节点
    newCurr.random = head.random ? map.get(head.random) : null;
    head = head.next;
    newCurr = newCurr.next;
  }

  return newHead;
};
// @lc code=end
