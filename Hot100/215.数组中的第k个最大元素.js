/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  // 原地快速排序算法，每次取数组最右边元素作为pivot，然后双指针将比pivot大的放到左边，交换pivot和左指针位置即做到原地的一个快速排序，最后得到比pivot大的在左，小在右，返回pivotIndex
  // 比较判断k的位置在pivotIndex左还是右，递归，如果两者相等则停止排序直接返回以排序好的数组
  const quick = (start, end) => {
    if (start > end) return;
    let pivotIndex = partition(nums, start, end);
    // k在左边则递归左，反之右，找到k
    if (k - 1 < pivotIndex) quick(start, pivotIndex - 1);
    else if (k - 1 > pivotIndex) quick(pivotIndex + 1, end);
  };
  quick(0, nums.length - 1); // 让n-k位置的左边都比 nums[n-k] 小，右边都比 nums[n-k] 大
  return nums[k - 1];
};

function partition(nums, start, end) {
  let pivot = nums[end]; // 最右边的元素作为 pivot 元素
  // 遍历数组，用双指针将比pivot大的元素移动到最左边
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (nums[i] > pivot) {
      [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
      pivotIndex++;
    }
  } // 循环结束时，pivotIndex左边都是比pivot大的
  [nums[end], nums[pivotIndex]] = [nums[pivotIndex], nums[end]]; // pivotIndex和right交换，更新pivot元素
  console.log(nums);
  return pivotIndex; // 返回 pivotIndex 下标
}

// @lc code=end
