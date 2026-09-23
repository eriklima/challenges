// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let mod = 0;
  let absX = Math.abs(x);
  let factor = 1;
  let result = 0;

  while (mod < absX) {
    mod = absX % factor;

    const addition = Math.floor(mod / (factor / 10));

    result = result * 10 + addition;

    factor = factor * 10;
  }

  const signal = x < 0 ? -1 : 1;
  result = result * signal;

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};
