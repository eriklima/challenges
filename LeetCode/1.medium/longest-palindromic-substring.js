// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;

  const expandByCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - 1 - left;
  };

  for (let center = 0; center < s.length; center++) {
    const size1 = expandByCenter(center, center);
    const size2 = expandByCenter(center, center + 1);
    const longestSize = Math.max(size1, size2);

    if (longestSize > end + 1 - start) {
      start = center - Math.floor((longestSize - 1) / 2);
      end = center + Math.floor(longestSize / 2);
    }
  }

  return s.substring(start, end + 1);
};

const input = "babad";
console.log(longestPalindrome(input));
