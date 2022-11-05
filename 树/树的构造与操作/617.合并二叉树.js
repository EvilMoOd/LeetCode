/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return root1;
  const buildTree = (node1, node2) => {
    if (!node1 && !node2) return;
    else if (node1 && !node2)
      return new TreeNode(
        node1.val,
        buildTree(node1.left, null),
        buildTree(node1.right, null)
      );
    else if (!node1 && node2)
      return new TreeNode(
        node2.val,
        buildTree(null, node2.left),
        buildTree(null, node2.right)
      );
    else
      return new TreeNode(
        node1.val + node2.val,
        buildTree(node1.left, node2.left),
        buildTree(node1.right, node2.right)
      );
  };
  return buildTree(root1, root2);
  // 构造一棵新树根据两棵要合并的树的具体节点情况进行新节点的创建即可
};
// @lc code=end
