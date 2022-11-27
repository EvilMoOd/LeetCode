/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 用前序遍历成数组后解题方式与两数之和就一样了，这里也可以直接用set来在遍历中解决,set就不用纠结遍历方式了
  const set = new Set();
  const dfs = (node) => {
    if (!node) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};
// @lc code=end
