function DataType(data, type) {
  const dataType = Object.prototype.toString
    .call(data)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase();
  return type ? dataType === type : dataType;
}
