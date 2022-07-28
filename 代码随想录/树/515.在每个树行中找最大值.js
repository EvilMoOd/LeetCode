/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  //层序遍历之后计算每一层最大值，存入res
  let res = [],
    queue = [];
  queue.push(root);
  if (!root) return res;
  while (queue.length) {
    let level = [],
      len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    let max = Math.max(...level);
    res.push(max);
  }
  return res;
};
// @lc code=end
