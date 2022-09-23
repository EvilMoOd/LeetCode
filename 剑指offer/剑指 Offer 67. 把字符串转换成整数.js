/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  //去空格，正则
  const Min = -Math.pow(2, 31)
  const Max = Math.pow(2, 31) - 1
  const result = parseInt(str.trim()) || 0;
  return result < Min ? Min : (result > Max ? Max : result)
};