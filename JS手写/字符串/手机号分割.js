// 适合纯11位手机
const splitMobile = (mobile, format = '-') => {
  return String(mobile).replace(/(?=(\d{4})+$)/g, format)
}
// 适合11位以内的分割
const splitMobile2 = (mobile, format = '-') => {
  return String(mobile).replace(/(?<=(\d{3}))/, format).replace(/(?<=([\d\-]{8}))/, format)
}
