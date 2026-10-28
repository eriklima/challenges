// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reverse = 0;

  while (reverse < x) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse === x || x === Math.floor(reverse / 10);
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let mod = 10;
  let rest = x % mod;
  let result = 0;

  while (rest < x) {
    const sum = Math.floor(rest / (mod / 10));
    result = result * 10 + sum;
    mod *= 10;
    rest = x % mod;
  }

  const sum = Math.floor(rest / (mod / 10));
  result = result * 10 + sum;

  return result === x;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const strX = x.toString();

  let left = 0;
  let right = strX.length - 1;

  while (left < right) {
    if (strX[left] === strX[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }

  return left >= right;
};
