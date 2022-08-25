/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  // 递归分治
  /* 刚开始看还有点懵，其实问就是二叉搜索树的特性，左子树<根节点<右子树
  因为是后序遍历，所以左子树、根、右子树恰好对应数组连续的三个部分，
  所以我们只需要设置条件遍历数组（左子树）到根，然后继续遍历（右子树）到结尾，如果遍历不到结尾说明条件不符
  判断完当前树后向下递归判断（因为二叉搜索树确保每一个根节点都是左小右大） */
  const isPostorder = (start, end) => {
    if (start >= end) return true;
    let cur = start,
      rightFirst;
    while (postorder[cur] < postorder[end]) cur++;
    rightFirst = cur;
    while (postorder[cur] > postorder[end]) cur++;
    return (
      cur === end &&
      isPostorder(start, rightFirst - 1) &&
      isPostorder(rightFirst, end - 1)
    );
  };
  return isPostorder(0, postorder.length - 1);

  // 单调栈，有些难理解，思路就是不断更新右子树根节点变量作为峰值，要求当前遍历到的值必须小于该节点值，否则不符，并且需要在
  let stack = [];
  let root = Number.MAX_SAFE_INTEGER;
  for (let i = postorder.length - 1; i >= 0; i--) {
    // 如果后面的元素还比根节点大了  那肯定不是正确的顺序
    if (postorder[i] > root) return false;
    // 如果栈内有值并且栈顶元素比当前元素大，比当前元素大的都弹出来，最后一个弹出来的一定是后面元素（左子树）的根节点
    while (stack.length && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop();
    }
    stack.push(postorder[i]);
  }
  return true;
};
