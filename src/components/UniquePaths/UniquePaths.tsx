import { useNavigate } from 'react-router-dom';
import './UniquePaths.scss';
import { useState } from 'react';
import type { GridDimensions } from '../../models/Grid';

function UniquePaths() {
  const navigate = useNavigate();

  const [gridDimensions, setGridDimensions] = useState<GridDimensions>({
    rows: 3,
    cols: 3,
  } as GridDimensions);

  const handleUniquePathsBtnClick = () => {};

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
          Enter the grid dimensions (default 3x3 grid with placeholder values as
          0):
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
            className='display-grid-button'
          >
            Calculate unique paths
          </button>
        </div>
        <div className='grid-display'>
          <table className='grid-table'>
            <tbody>
              {Array.from({ length: gridDimensions.rows }, (_, i) => (
                <tr key={i}>
                  {Array.from({ length: gridDimensions.cols }, (_, j) => (
                    <td key={j}>0</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UniquePaths;
