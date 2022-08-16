// create
Object.prototype._create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};
// entries
Object.prototype._entries = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]]);
  }
  return res;
};
// fromEntries
Object.prototype._fromEntries = function (arr) {
  const obj = {};
  for (let item of arr) {
    const [key, value] = item;
    obj[key] = item[value];
  }
  return obj;
};
// keys
Object.prototype._keys = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(key);
  }
  return res;
};
// values
Object.prototype._values = function (obj) {
  const res = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(obj[key]);
  }
  return res;
};

// is
Object.prototype._is = function (x, y) {
  if (x === y) {
    // 防止 +0 和 -0
    return x !== 0 && 1 / x === 1 / y;
  }

  // 防止NaN
  return x !== x && y !== y;
};
// assign
Object.prototype._assign = function (target, ...args) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  target = Object(target);

  for (let obj of args) {
    for (let key in obj) {
      obj.hasOwnProperty(key) && (target[key] = obj[key]);
    }
  }

  return target;
};
// instanceOf
const instanceOf = function (parent, children) {
  const fp = parent.prototype;
  let cp = children.__proto__;
  while (cp) {
    if (fp === cp) {
      return true;
    }
    cp = cp.__proto__;
  }
  return false;
};
// new
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag =
    result && (typeof result === 'object' || typeof result === 'function');
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);
