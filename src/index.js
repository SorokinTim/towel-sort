
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let result = [];

  let revert = false;
  for (let i = 0; i < matrix.length; i++) {
    if (!revert) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
      revert = !revert;
      // console.log("(IF) REVERT IS ", revert);
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
      revert = !revert;
      // console.log("(ELSE) REVERT IS ", revert);
    }
  }

  return result || [];
}
