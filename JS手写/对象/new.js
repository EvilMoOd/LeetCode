function myNew(constructor, ...args) {
  // 判断参数是否是一个函数
  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  const obj = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  constructor.apply(obj, args);
  return obj;
}
