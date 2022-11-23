/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  // 数学，暂时没看
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const leftCount = i,
      rightCount = n - i - 1;
    const leftOdd = Math.floor((leftCount + 1) / 2);
    const rightOdd = Math.floor((rightCount + 1) / 2);
    const leftEven = Math.floor(leftCount / 2) + 1;
    const rightEven = Math.floor(rightCount / 2) + 1;
    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }
  return sum;
};
// @lc code=end
