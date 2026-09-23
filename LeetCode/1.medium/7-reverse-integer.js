// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let absX = Math.abs(x);
  let result = 0;

  while (absX > 0) {
    result = result * 10 + (absX % 10);
    absX = Math.floor(absX / 10);
  }

  const signal = x < 0 ? -1 : 1;
  result = result * signal;

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};
