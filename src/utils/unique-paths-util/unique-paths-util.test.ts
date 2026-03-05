import { describe, it, expect } from 'vitest';
import { getUniquePaths, isLastCell } from './unique-paths-util';

describe('unique-paths-util', () => {
  it('calculates unique paths for simple grids', () => {
    const gridResultRows1Cols1 = getUniquePaths({ rows: 1, cols: 1 });
    expect(gridResultRows1Cols1.uniquePaths).toBe(1);
    expect(gridResultRows1Cols1.grid).toEqual([[1]]);

    const gridResultRows2Cols2 = getUniquePaths({ rows: 2, cols: 2 });
    expect(gridResultRows2Cols2.uniquePaths).toBe(2);
    expect(gridResultRows2Cols2.grid.length).toBe(2);

    const gridResultRows3Cols3 = getUniquePaths({ rows: 3, cols: 3 });
    expect(gridResultRows3Cols3.uniquePaths).toBe(6);

    const gridResultRows7Cols10 = getUniquePaths({ rows: 7, cols: 10 });
    expect(gridResultRows7Cols10.uniquePaths).toBe(5005);
  });

  it('returns empty result for invalid dimensions', () => {
    const gridResult = getUniquePaths({ rows: 0, cols: 3 });
    expect(gridResult.uniquePaths).toBe(0);
    expect(gridResult.grid).toEqual([]);
  });

  it('isLastCell identifies the bottom-right cell', () => {
    const gridResult = getUniquePaths({ rows: 3, cols: 3 });
    expect(isLastCell(2, 2, gridResult)).toBe(true);
    expect(isLastCell(1, 2, gridResult)).toBe(false);
  });
});
