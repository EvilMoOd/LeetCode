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
