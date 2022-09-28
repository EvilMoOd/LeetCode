// add(1)(2)(3)()=6
// add(1,2,3)(4)()=10
// 惰性函数（手动运行）
function add(...args) {
  let res = [...args]

  let fn = function (...args) {
    if (args.length) {
      res.push(...args)
      return fn
    } else {
      return res.reduce((a, b) => a + b);
    }
  }
  return fn
}
const data = add(1)(2,3)(4)()
console.log(data);

// 惰性函数（达到指定参数个数后自运行）
const currying = (fn, ...args) => {
  let allArgs = [...args];
  const res = (...args2) => {
    allArgs.push(...args2);
    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
};
// use
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2)(3)); // 1 + 2 + 3=6

