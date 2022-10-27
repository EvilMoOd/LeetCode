/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
/*   由于数组中有两位除非数字，所以不能直接进行异或运算出结果
  剩余的两个数在二进制表示中一定有一个位不同，所以其异或之后肯定有个位置为1.
  我们找到该位置后，可以用与运算与每一个元素并进行分组,主要将这两个不同元素分到不同组
  分组后每个组各自进行异或运算，最后两组剩余的元素即为答案 */
  let res = 0;
  for (const i of nums) {
    res ^= i;
  }
  let divide = 1;
  while ((divide & res) === 0) {
    divide <<= 1;
  }
  let [res1, res2] = [0, 0];
  for (const i of nums) {
    i & divide ? (res1 ^= i) : (res2 ^= i);
  }
  return [res1, res2];
};
// @lc code=end
