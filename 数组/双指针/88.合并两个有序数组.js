/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let all = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[m] >= nums2[n]
      ? ([nums1[m], nums1[all]] = [nums1[all], nums1[m]]) && m--
      : (nums1[all] = nums2[n--]);
    all--;
  }
  // 这里其实用到了三个指针，进行装填nums1的all指针，比较用的m，n指针
  // 因为nums1结尾被0填充且0的数量刚好够nums2中的元素,我们可以理解为0的位置就是2中元素放入的位置
  // 比较mn指针指定元素,如果2大直接填入0即可,如果1大则做swap操作,把0提到前面去给后续2填入
  // 如果nums2元素也就是n指针到-1,则说明数组已排序好,数组中中没有0
};
// @lc code=end
