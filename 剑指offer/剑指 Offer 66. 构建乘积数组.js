/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 暴力，特别针对a数组中存在0或负数的情况做处理
  let sum = 1;
  let no0Sum = 1;
  let flag = false;
  for (const i of a) {
    sum *= i;
    if (i === 0 && !flag) {
      flag = true;
    } else {
      no0Sum *= i;
    }
  }
  let b = [];
  let i = 0;
  for (const item of a) {
    if (item === 0) {
      b[i] = no0Sum;
    } else {
      b[i] = sum / item;
    }
    ++i;
  }
  return b;
};
