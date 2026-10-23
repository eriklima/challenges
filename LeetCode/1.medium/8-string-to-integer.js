// https://leetcode.com/problems/string-to-integer-atoi/description/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  let startNumbers = false;
  let signal = 1;

  const isNumber = (char) =>
    char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;

  const isSpace = (char) => char.charCodeAt(0) === 32;

  const isSignal = (char) =>
    char.charCodeAt(0) === 43 || char.charCodeAt(0) === 45;

  const roundingResult = (result) =>
    result < Math.pow(-2, 31)
      ? Math.pow(-2, 31)
      : result > Math.pow(2, 31) - 1
        ? Math.pow(2, 31) - 1
        : result;

  for (let char of s) {
    if (isSpace(char)) {
      if (startNumbers) {
        break;
      } else {
        continue;
      }
    }

    if (isSignal(char)) {
      if (startNumbers) {
        break;
      } else {
        signal = char === "+" ? 1 : -1;
        startNumbers = true;
        continue;
      }
    }
    f;

    if (!isNumber(char)) {
      break;
    }

    startNumbers = true;

    result = result * 10 + char * 1;
  }

  result = result * signal;

  return roundingResult(result);
};
