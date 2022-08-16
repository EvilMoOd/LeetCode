const currying = (fn, ...args) => {
  let allArgs = [...args];
  const num = fn.length;
  const res = (...args2) => {
    allArgs = [...allArgs, ...args2];
    if (allArgs.length === num) {
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
