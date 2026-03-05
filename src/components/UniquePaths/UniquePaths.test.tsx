import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import UniquePaths from './UniquePaths';
import { getUniquePaths } from '../../utils/unique-paths-util/unique-paths-util';

describe('UniquePaths component', () => {
  it('renders initial paths and recalculates after input change', async () => {
    render(
      <MemoryRouter>
        <UniquePaths />
      </MemoryRouter>,
    );

    // Default 3x3 grid and has 6 paths
    expect(screen.getByText(/Paths: 6/)).toBeTruthy();

    const rowsInput = screen.getByPlaceholderText('Enter grid rows');
    const colsInput = screen.getByPlaceholderText('Enter grid columns');
    const calcBtn = screen.getByRole('button', {
      name: /Calculate unique paths/i,
    });

    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, '4');
    await userEvent.clear(colsInput);
    await userEvent.type(colsInput, '11');

    await userEvent.click(calcBtn);

    const expected = getUniquePaths({ rows: 4, cols: 11 }).uniquePaths;
    expect(screen.getByText(`Paths: ${expected}`)).toBeTruthy();
  });
});
