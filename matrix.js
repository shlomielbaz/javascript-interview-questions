const matrix = [
  [2, 4, 1, 1],
  [0, 3, 2, 2],
  [5, 2, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
];

const limit = 20;

function initializeArray(rows, cols) {
  const array = [];
  for (let i = 0; i < rows; i++) {
      array.push(new Array(cols).fill(0));
  }
  return array;
}

function isSumLessThan(matrix, row, col, newValue, targetSum) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Update the cell value
  const oldValue = matrix[row][col];
  matrix[row][col] = newValue;

  // Calculate sum of slant left cells
  let slantLeftSum = 0;
  for (let i = Math.max(row, col); i >= 0; i--) {
      if (row - i >= 0 && col - i >= 0) {
          slantLeftSum += matrix[row - i][col - i];
      }
  }

  // Calculate sum of slant right cells
  let slantRightSum = 0;
  for (let i = 0; i < rows; i++) {
      if (row - i >= 0 && col + i < cols) {
          slantRightSum += matrix[row - i][col + i];
      }
  }

  // Calculate sum of vertical cells
  let verticalSum = 0;
  for (let i = 0; i < rows; i++) {
      verticalSum += matrix[i][col];
  }

  // Calculate sum of horizontal cells
  let horizontalSum = 0;
  for (let j = 0; j < cols; j++) {
      horizontalSum += matrix[row][j];
  }

  // Check if all sums are less than targetSum
  const isLessThanTargetSum = slantLeftSum < targetSum &&
                              slantRightSum < targetSum &&
                              verticalSum < targetSum &&
                              horizontalSum < targetSum;

  // Restore the old cell value
  matrix[row][col] = oldValue;

  return isLessThanTargetSum;
}

// Example usage:
const rows = 3;
const cols = 3;
const targetSum = 10;
//const matrix = initializeArray(rows, cols);
console.log(isSumLessThan(matrix, 1, 1, 5, targetSum)); // Example of changing a cell value and checking if sums are less than targetSum









// const checkVerticle = (row, matrix) => {
//   let sum = 0;
//   for (let x = 0; x < matrix[0].length; x++) {
//     sum = sum + matrix[row][x];
//   }
//   return sum;
// };

// const checkHorizontal = (col, matrix) => {
//   let sum = 0;
//   for (let y = 0; y < matrix.length; y++) {
//     sum = sum + matrix[y][col];
//   }

//   return sum;
// };

// const checkSlantLeft = (row, col, matrix) => {
//   let sum = 0;
//   let x1 = col,
//     y1 = row,
//     x2 = col,
//     y2 = row;
//   let cols = matrix[0].length;
//   let rows = matrix.length;
//   let isVisited = false;
//   while (true) {
//     if (x2 >= 0 && y2 < cols) {
//       sum = sum + matrix[x2][y2];
//       x2 = x2 - 1;
//       y2 = y2 + 1;
//     } else if (y1 >= 0 && x1 < rows) {
//       if (isVisited) {
//         sum = sum + matrix[x1][y1];
//       }
//       x1 = x1 + 1;
//       y1 = y1 - 1;
//       isVisited = true;
//     } else {
//       return sum;
//     }
//   }
// };

// const checkSlantRight = (row, col, matrix) => {
//   let sum = 0;
//   let x1 = col,
//     y1 = row,
//     x2 = col,
//     y2 = row;
//   let cols = matrix[0].length;
//   let rows = matrix.length;
//   let isVisited = false;

//   while (true) {
//     if (x2 >= 0 && y2 >= 0) {
//       sum = sum + matrix[x2][y2];
//       x2 = x2 - 1;
//       y2 = y2 - 1;
//     } else if (y1 < cols && x1 < rows) {
//       if (isVisited) {
//         sum = sum + matrix[x1][y1];
//       }
//       x1 = x1 + 1;
//       y1 = y1 + 1;
//       isVisited = true;
//     } else {
//       return sum;
//     }
//   }
// };

// const markkVerticle = (y, matrix) => {
//   const cols = matrix[0].length;
//   for (let x = 0; x < cols; x++) {
//     console.log(x, y)
//   }
// };

// const markHorizontal = (x, matrix) => {
//   const rows = matrix.length;
//   for (let y = 0; y < rows; y++) {
//       console.log(x, y)
//     }
// };

// const markSlantLeft = (row, col, matrix) => {
//   let sum = 0;
//   let x1 = col,
//     y1 = row,
//     x2 = col,
//     y2 = row;
//     const cols = matrix[0].length;
//     const rows = matrix.length;
//   let isVisited = false;
//   while (true) {
//     if (x2 >= 0 && y2 < cols) {
//       console.log(x2, y2)
//       x2 = x2 - 1;
//       y2 = y2 + 1;
//     } else if (y1 >= 0 && x1 < rows) {
//       if (isVisited) {
//           console.log(x1, y1)
//       }
//       x1 = x1 + 1;
//       y1 = y1 - 1;
//       isVisited = true;
//     } else {
//       break;
//     }
//   }
// };

// const markSlantRight = (row, col, matrix) => {
//   let sum = 0;
//   let x1 = col,
//     y1 = row,
//     x2 = col,
//     y2 = row;
//   let cols = matrix[0].length;
//   let rows = matrix.length;
//   let isVisited = false;

//   while (true) {
//     if (x2 >= 0 && y2 >= 0) {
//       console.log(x2, y2)
//       x2 = x2 - 1;
//       y2 = y2 - 1;
//     } else if (y1 < cols && x1 < rows) {
//       if (isVisited) {
//           console.log(x1, y1)
//       }
//       x1 = x1 + 1;
//       y1 = y1 + 1;
//       isVisited = true;
//     } else {
//       break;
//     }
//   }
// };


// function check(row, col, limit) {
//   const v = checkVerticle(row, matrix);
//   const h = checkHorizontal(col, matrix);
//   const l = checkSlantLeft(row, col, matrix);
//   const r = checkSlantRight(row, col, matrix);

//   if (v > limit) {
//     markVerticle(row, matrix);
//   }

//   if (h > limit) {
//     markHorizontal(col, matrix);
//   }

//   if (l > limit) {
//     markSlantLeft(row, col, matrix);
//   }

//   if (r > limit) {
//     markSlantRight(row, col, matrix);
//   }

//   return (v <= limit && h <= limit && l <= limit && r <= limit) || false;
// }

// /*
// [2, 4, 1, 1],
// [0, 3, 2, 1],
// [5, 2, 0, 0],
// [0, 1, 1, 0],
// [0, 1, 1, 0]
// */

// if (check(2, 2, limit)) {
//     console.log('TRUE')
// }
