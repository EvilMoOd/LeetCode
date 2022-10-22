/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 1) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  // 和移动零相同的思路,移动右指针遇到奇数则与左指针swap,然后同时移动一次双指针
};
