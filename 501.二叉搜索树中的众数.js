/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let pre = 0,
    count = 0,
    maxCount = 0;
  let res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    // 收集众数
    if (node.val === pre) {
      count++;
    } else {
      pre = node.val;
      count = 1;
    }
    // 更新新的最大数量众数
    if (count === maxCount) res.push(pre);
    if (count > maxCount) {
      maxCount = count;
      res = [pre];
    }
    dfs(node.right);
  };
  dfs(root);
  return res;
  // 同样是中序遍历，需要统计每个遍历到的数，如果不用额外空间（表）的话，需要边统计变更新
};
// @lc code=end
