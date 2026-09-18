/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const memory = [];
  let row = 0;
  let factor = 1;

  for (const char of s) {
    if (!memory[row]) {
      memory[row] = "";
    }

    memory[row] = memory[row] + char;

    row += factor;

    if (row === numRows - 1) {
      factor = -1;
    }

    if (row === 0) {
      factor = 1;
    }
  }

  return memory.join("");
};

console.log(convert("PAYPALISHIRING", 4));
