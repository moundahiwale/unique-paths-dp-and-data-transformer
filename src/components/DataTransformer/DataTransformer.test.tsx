import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import DataTransformer from './DataTransformer';

describe('DataTransformer component', () => {
  it('renders and shows top-3 transformed result after click', async () => {
    render(
      <MemoryRouter>
        <DataTransformer />
      </MemoryRouter>,
    );

    const transformDataBtn = screen.getByRole('button', {
      name: /Transform Data/i,
    });
    await userEvent.click(transformDataBtn);

    // For the mock intelligence data, output should contain the top threat
    expect(screen.getByText(/"high":4/)).toBeTruthy();
    // and must include us country with count 2
    expect(screen.getByText(/"us":2/)).toBeTruthy();
  });
});
