/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) left++;
    else if (nums[left] + nums[right] > target) right--;
    else return [nums[left], nums[right]];
  }
  // 左右指针两端不断缩小范围,比target大则右指针左移,小则左指针右移动
  // 由于是递增的nums,所以双指针不存在错过的情况,一定是在大于和小于之间徘徊,逐渐缩小范围
};
