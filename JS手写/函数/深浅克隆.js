// 深克隆
const tagMap = {
  mapTag: '[object Map]',
  setTag: '[object Set]',
  arrayTag: '[object Array]',
  objectTag: '[object Object]',
  symbolTag: '[object Symbol]',
  regexpTag: '[object RegExp]',
};

const checkType = (target) => {
  return Object.prototype.toString.call(target);
};

const checkTemp = (target) => {
  const c = target.constructor;
  return new c();
};

const cloneSymbol = (target) => {
  return Object(Symbol.prototype.valueOf.call(target));
};

const cloneReg = (target) => {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
};

const deepClone = (target, map = new Map()) => {
  const type = checkType(target);

  if (!Object.values(tagMap).includes(type)) {
    return target;
  }

  if (type === tagMap.symbolTag) {
    return cloneSymbol(target);
  }
  if (type === tagMap.regexpTag) {
    return cloneReg(target);
  }

  const temp = checkTemp(target);

  if (map.get(target)) {
    return map.get(target);
  }

  map.set(target, temp);

  if (type === tagMap.setTag) {
    target.forEach((value) => {
      temp.add(deepClone(value, map));
    });
  }

  if (type === tagMap.mapTag) {
    target.forEach((value, key) => {
      temp.set(key, deepClone(value, map));
    });
  }

  for (const key in target) {
    temp[key] = deepClone(target[key], map);
  }
  return temp;
};

// 浅拷贝的实现;
function shallowClone(object) {
  // 只拷贝对象或数组
  if (!object || typeof object !== 'object') return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}
