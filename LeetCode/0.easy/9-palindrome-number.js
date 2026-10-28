// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeA = function (x) {
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
var isPalindromeB = function (x) {
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
var isPalindromeC = function (x) {
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

function bench(name, fn, inputs, runs = 5_000_000) {
  let sink = 0;

  const t0 = performance.now();

  for (let i = 0; i < runs; i++) {
    sink += fn(inputs[i % inputs.length]) ? 1 : 0;
  }

  const t1 = performance.now();

  console.log(`${name}: ${(t1 - t0).toFixed(1)} ms (sink=${sink})`);
}

const inputs = [121, -121, 10, 1221, 2147447412, 1234567, 0, 1000];

bench("AlgoritmoA", isPalindromeA, inputs);
bench("AlgoritmoB", isPalindromeB, inputs);
bench("AlgoritmoC", isPalindromeC, inputs);

/*
AlgoritmoA: 41.2 ms (sink=2500000)
AlgoritmoB: 127.2 ms (sink=2500000)
AlgoritmoC: 54.4 ms (sink=2500000)
*/
