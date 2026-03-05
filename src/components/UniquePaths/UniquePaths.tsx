import { useNavigate } from 'react-router-dom';
import './UniquePaths.scss';
import { useState } from 'react';
import type { GridDimensions, GridResult } from '../../models/Grid';
import { getUniquePaths, isLastCell } from '../../utils/unique-paths-util/unique-paths-util';

function UniquePaths() {
  const navigate = useNavigate();
  const intialGridRowsAndCols = 3;

  const [gridDimensions, setGridDimensions] = useState<GridDimensions>({
    rows: intialGridRowsAndCols,
    cols: intialGridRowsAndCols,
  } as GridDimensions);

  const initialGridResult: GridResult = getUniquePaths(gridDimensions);

  const [gridResult, setGridResult] = useState<GridResult>({
    grid: initialGridResult.grid,
    uniquePaths: initialGridResult.uniquePaths,
  });

  const handleUniquePathsBtnClick = () => {
    setGridResult(getUniquePaths(gridDimensions));
  };

  return (
    <div className='unique-paths'>
      <button onClick={() => navigate('/')} className='back-button'>
        ⬅️ Back to Home Page
      </button>
      <h2>Unique Paths</h2>
      <div>
        Calculate the number of unique paths in a <strong>n x m</strong> grid
        using dynamic programming.
      </div>
      <div className='unique-grid-container'>
        <div>
          Enter the grid dimensions (default 3x3 grid) and click calculate:
        </div>
        <div className='grid-dimensions'>
          <input
            type='text'
            name='grid-rows'
            id='grid-rows'
            placeholder='Enter grid rows'
            value={gridDimensions.rows}
            onChange={(e) =>
              setGridDimensions({
                ...gridDimensions,
                rows: parseInt(e.target.value) || 0,
              })
            }
          />
          <input
            type='text'
            name='grid-columns'
            id='grid-columns'
            placeholder='Enter grid columns'
            value={gridDimensions.cols}
            onChange={(e) =>
              setGridDimensions({
                ...gridDimensions,
                cols: parseInt(e.target.value) || 0,
              })
            }
          />
          <button
            onClick={handleUniquePathsBtnClick}
            className='calculate-paths-button'
          >
            Calculate unique paths
          </button>
        </div>
        <div className='grid-display'>
          {gridResult.grid.length === 0 ? (
            <div className='alert-invalid-grid'>
              Enter valid grid dimensions
            </div>
          ) : (
            <div className='grid-result'>
              <div className='grid-paths'>{`Paths: ${gridResult.uniquePaths}`}</div>
              <table className='grid-table'>
                <tbody>
                  {gridResult.grid.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((col, columnIndex) => (
                        <td
                          key={columnIndex}
                          className={
                            isLastCell(rowIndex, columnIndex, gridResult)
                              ? 'result-cell'
                              : ''
                          }
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UniquePaths;
