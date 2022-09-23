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
  // 用map来实现链表的深拷贝
  if (!head) return head;

  // 把所有节点都存到map中（当前map中都是离散的单个节点）
  let node = head;
  let map = new Map();
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  // 再从头节点再开始遍历，设置map中对应节点的next指针和random指针
  node = head;
  while (node) {
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random);
    node = node.next;
  }

  // 返回map中的头节点，也就是复制后的头节点
  return map.get(head);
};
// @lc code=end
