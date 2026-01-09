/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (const char of s) {
    const lastElement = stack.at(-1);
    switch (char) {
      case '}':
        if (lastElement === '{') {
          stack.pop();
          break;
        } else {
          return false;
        }
      case ']':
        if (lastElement === '[') {
          stack.pop();
          break;
        } else {
          return false;
        }
      case ')':
        if (lastElement === '(') {
          stack.pop();
          break;
        } else {
          return false;
        }
      default:
        stack.push(char);
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid('([)]]{}'));