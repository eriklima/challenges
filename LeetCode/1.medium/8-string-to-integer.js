// https://leetcode.com/problems/string-to-integer-atoi/description/

// OPÇÃO 1:

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let pos = 0;
  let signal = 1;
  let result = 0;

  const isNumber = (char) =>
    char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;

  // 1. Whitespace
  while (pos < s.length) {
    if (s[pos] === " ") {
      pos++;
    } else {
      break;
    }
  }

  // 2. Signedness
  if (s[pos] === "-") {
    signal = -1;
    pos++;
  } else if (s[pos] === "+") {
    pos++;
  }

  // 3.1 Leading zeros
  while (pos < s.length) {
    if (s[pos] === "0") {
      pos++;
    } else {
      break;
    }
  }

  // 3.2 Reading integers
  while (pos < s.length) {
    const char = s[pos];
    if (isNumber(char)) {
      result = result * 10 + char * 1;
      pos++;
    } else {
      break;
    }
  }

  // 4. Rounding
  result = result * signal;

  if (result < Math.pow(-2, 31)) {
    result = Math.pow(-2, 31);
  } else if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1;
  }

  return result;
};

// OPÇÃO 2:

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
