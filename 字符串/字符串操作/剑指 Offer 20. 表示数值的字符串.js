/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return /^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/.test(s.trim());
  /* 枚举所有情况
  1、正负（可选） ^[\+\-]?
  2、整数和小数（可选）(\d+(\.\d*)?)
  3、纯小数（可选） \.\d+
  4、指数部分（可选）e或E后面跟带+-的整数 ([eE][-+]?\d+)?
   */
};
