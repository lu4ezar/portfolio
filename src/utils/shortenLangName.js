/*
JavaScript => JS
TypeScript => TS
*/
export default function (str) {
  const exp = /[A-Z]/g
  return str.match(exp).join("")
}
