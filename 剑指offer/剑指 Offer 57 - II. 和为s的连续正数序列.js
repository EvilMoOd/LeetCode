/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 滑动窗口
  let left = 1,
    right = 1,
    sum = 0,
    res = [];
    // 循环到最后，左指针和右指针一定是target的一半
  while (left <= target >> 1) {
    if (sum < target) {
      sum += right;
      right++;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      let temp = [];
      for (let i = left; i < right; i++) {
        temp.push(i);
      }
      res.push(temp);
      sum -= left;
      left++;
    }
  }
  return res
};
