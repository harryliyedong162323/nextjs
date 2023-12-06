import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should render the main template', () => {
      render(
        <Main meta={<div data-testid="meta">Meta</div>}>
          <div data-testid="children">Children</div>
        </Main>
      );

      expect(screen.getByTestId('meta')).toBeInTheDocument();
      expect(screen.getByTestId('children')).toBeInTheDocument();
    });
  });
});
