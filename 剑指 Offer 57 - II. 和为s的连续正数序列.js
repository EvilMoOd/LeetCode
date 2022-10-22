/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  if (target < 3) return [];
  const res = [];
  // 确定数组
  const end = Math.ceil(target / 2);
  const arr = [];
  for (let i = 1; i <= end; i++) {
    arr.push(i);
  }
  // 移动窗口
  let left = 0,
    right = 1,
    sum = 1;
  while (right <= end) {
    if (sum === target) res.push(arr.slice(left, right));
    if (sum <= target) {
      sum += arr[right];
      right++;
    } else if (sum > target) {
      sum -= arr[left];
      left++;
    }
  }
  console.log(
    res,
    '🚀DEBUG变量>>>res<<<在剑指 Offer 57 - II. 和为s的连续正数序列的第32行🚀'
  );
  return res;
};
findContinuousSequence(9);
