/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  const isPostorder = (start, end) => {
    if (start >= end) return true;
    let now = start,
      midIndex;
    // 找到第一个大于当前子树根节点的值，代表是二叉搜索树的右子树了，对于后序遍历，根节点是数组最后一位，即 postorder[end]
    while (postorder[now] < postorder[end]) now++;
    midIndex = now;
    // 找到第一个小于当前子树根节点的值，正常来说应该遍历到结尾的，即二叉搜索树右侧不应出现比根节点要小的值，如果出现了说明不符合，提前跳出循环
    while (postorder[now] > postorder[end]) now++;
    // 如果没遍历到末尾，提前跳出了循环，那么 now !== end，同时判断左子树和右子树是否都符合
    return (
      now === end &&
      isPostorder(start, midIndex - 1) &&
      isPostorder(midIndex, end - 1)
    );
  };

  return isPostorder(0, postorder.length - 1);
  // 后序遍历是左|右|中，所以最后一元素是根节点
  // 因为是搜索树，所以根据特性可知，左子树小于根节点，右子树大于根节点，按照中序遍历就会有连续元素小于最后一个元素，连续元素大于最后一个元素
  // 尝试遍历一遍，如果遍历到最后根节点说明该树符合搜索树性质
  // 当然还要继续往下递归比对搜索树的子树是否符合条件
};
