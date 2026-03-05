import type { GridDimensions, GridResult } from '../../models/Grid';

// Since we can only move right or down, this is a classic dynamic programming problem.
// The number of unique paths to reach a cell (i, j) is the sum of unique paths to reach the cell above it (i-1, j)
// and the cell to the left of it (i, j-1), there are no other ways to reach the cell.
function getUniquePaths(gridDimensions: GridDimensions): GridResult {
  const { rows, cols } = gridDimensions;

  if (rows <= 0 || cols <= 0) {
    return { grid: [], uniquePaths: 0 };
  }

  // Create a 2D array to store the number of unique paths to each cell
  const paths: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0),
  );

  // For the first row, you cannot move from above and for the first column, you cannot move from left, so you can only move right or down respectively.
  // Hence initialise the first row and first column with 1 as there is only 1 way to reach these cells.
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    paths[rowIndex][0] = 1;
  }
  for (let columnIndex = 0; columnIndex < cols; columnIndex++) {
    paths[0][columnIndex] = 1;
  }

  // Loop over the 2D array starting from second row and second column (rowIndex = 1 and columnIndex = 1 respectively)
  // dp[rowIndex - 1][columnIndex] (cell above) + dp[rowIndex][columnIndex - 1] (cell to the left)
  // Time complexity O(n*m) where n is number of rows and m is number of columns, space complexity O(n*m) for the dp array
  for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 1; columnIndex < cols; columnIndex++) {
      paths[rowIndex][columnIndex] =
        paths[rowIndex - 1][columnIndex] + paths[rowIndex][columnIndex - 1];
    }
  }

  // The bottom-right cell contains the number of unique paths from top-left to bottom-right
  return { grid: paths, uniquePaths: paths[rows - 1][cols - 1] };
}

function isLastCell(
  rowIndex: number,
  columnIndex: number,
  gridResult: GridResult,
): boolean {
  return (
    rowIndex === gridResult.grid.length - 1 &&
    columnIndex === gridResult.grid[0].length - 1
  );
}

export { getUniquePaths, isLastCell };
