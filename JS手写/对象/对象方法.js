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

