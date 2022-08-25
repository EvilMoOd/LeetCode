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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (!root) return [];
  let res = [],
    path = [],
    sum = 0;
  let findPath = (root, path, sum) => {
    // 记录路径和路径的总值，作为参数往下递归
    path.push(root.val);
    sum += root.val;
    if (sum === target && !root.left && !root.right) res.push(path.slice());
    root.left && findPath(root.left, path, sum);
    root.right && findPath(root.right, path, sum);
    path.pop();
  };
  findPath(root, path, sum);
  return res;
};
