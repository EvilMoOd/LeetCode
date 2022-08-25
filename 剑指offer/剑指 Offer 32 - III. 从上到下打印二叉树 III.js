/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [],
    queue = [root],
    l = 1;
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // 判断当前层级，偶数的话把队列翻转一下再push到res中
    l % 2 === 0 ? res.push(level.reverse()) : res.push(level);
    l++;
  }
  return res;
};
