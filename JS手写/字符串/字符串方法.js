// slice
String.prototype._slice = function (start = 0, end) {
  start = start < 0 ? this.length + start : start;
  end = !end && end !== 0 ? this.length : end;

  if (start >= end) return '';
  let str = '';
  for (let i = start; i < end; i++) {
    str += this[i];
  }

  return str;
};
// substr
String.prototype._substr = function (start = 0, length) {
  if (length < 0) return '';

  start = start < 0 ? this.length + start : start;
  length =
    (!length && length !== 0) || length > this.length - start
      ? this.length
      : start + length;

  let str = '';
  for (let i = start; i < length; i++) {
    str += this[i];
  }
  return str;
};
// substring
String.prototype._substring = function (start = 0, end) {
  start = start < 0 ? this.length + start : start;
  end = !end && end !== 0 ? this.length : end;

  if (start >= end) [start, end] = [end, start];
  let str = '';
  for (let i = start; i < end; i++) {
    str += this[i];
  }

  return str;
};
// trim去空格
String.prototype._trim = function () {
  return this.replace(/^\s+|\s+$/g, '')
}