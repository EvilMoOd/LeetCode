/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arr = new Array(32).fill(0),
    result = 0;
  for (let i = 0; i < nums.length; i++) {
    // 对数组每个数进行 各数位值的记录，也就是转换为二进制串后，各数位是 0 还是 1，进行记录，记录到 arr
    let j = 0;
    while (nums[i]) {
      arr[j++] += nums[i] & 1;
      nums[i] >>= 1;
    }
  }

  // 记录完后，此时 arr 数组存着原数组所有数在各数位的 1 和 0 的数量
  for (let i = 0; i < 32; i++) {
    result += (1 << i) * (arr[i] % 3); // 如果该数位余3等于1，说明只出现一次的数在这个位置也是1，即多了一个1，乘上此时2的 i 次方
  }
  return result;
};
singleNumber([3, 4, 3, 3]);
