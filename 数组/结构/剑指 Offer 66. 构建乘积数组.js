/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 这道题不是模拟，是动规题，计算上三角和下三角的乘积，用动规只需要循环一遍
  let res = [];
  let arr1 = Array(a.length).fill(1);
  let arr2 = Array(a.length).fill(1);
  for (let i = 1; i < a.length; i++) arr1[i] = arr1[i - 1] * a[i - 1];
  for (let i = a.length - 2; i >= 0; i--) arr2[i] = arr2[i + 1] * a[i + 1];
  for (let i = 0; i < a.length; i++) res[i] = arr1[i] * arr2[i];
  return res;
};
