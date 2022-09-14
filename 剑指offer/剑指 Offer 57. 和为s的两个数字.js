/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // let map = new Map();
  // for (let i of nums) {
  //   if (map.get(i) === target - i) {
  //     return [i, map.get(i)];
  //   } else {
  //     map.set(target - i, i);
  //   }
  // }
  // 上面是两数之和的表解法，由于是有序数组，固可以用双指针提高速度,节省空间
  let left = 0,
    right = nums.length - 1;
  while (nums[left] + nums[right] !== target) {
    if (nums[left] + nums[right] < target) left++;
    else right--;
  }
  return [nums[left], nums[right]];
};
