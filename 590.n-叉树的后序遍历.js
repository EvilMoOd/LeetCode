/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  const dfs = (node) => {
    if (node === null) return;
    for (let child of node.children) {
      dfs(child);
    }
    res.push(node.val);
  };
  dfs(root);
  return res;
};
// @lc code=end
