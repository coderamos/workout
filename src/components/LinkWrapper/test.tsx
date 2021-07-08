import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render the link and children', () => {
    renderWithTheme(<LinkWrapper href="/link">some text</LinkWrapper>);

    const children = screen.getByRole('link', { name: /some text/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/link');
  });
});
