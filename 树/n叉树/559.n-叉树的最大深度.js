/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let deep = 0;
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j]);
      }
    }
    deep++;
  }
  return deep;
};
// @lc code=end
