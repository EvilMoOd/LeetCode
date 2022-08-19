// instanceOf
// 检测constructor的prototype是否在obj的原型上
const instanceOf = function (obj, constructor) {
  let cp = obj.__proto__;
  while (cp) {
    if (constructor.prototype === cp) {
      return true;
    }
    cp = cp.__proto__;
  }
  return false;
};