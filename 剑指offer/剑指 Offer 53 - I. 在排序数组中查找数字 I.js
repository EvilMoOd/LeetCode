/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分查找,找出左右边界求差值
  const getLeft = () => {
    let leftBorder = -2,
      left = 0,
      right = nums.length - 1;
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
        leftBorder = left;
      }
    }
    return leftBorder;
  };
  const getRight = () => {
    let rightBorder = -2,
      left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  };
  let leftBorder = getLeft(nums, target);
  let rightBorder = getRight(nums, target);
  //target在数组范围外
  if (leftBorder === -2 || rightBorder === -2) return 0;
  // target在数组范围内，存在和不存在
  if (rightBorder - leftBorder > 1) return rightBorder - leftBorder - 1;
  return 0;
};
