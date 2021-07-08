import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Map from '.';

describe('<Map />', () => {
  it('should render without marker', () => {
    renderWithTheme(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render the mark in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Brisbane',
        slug: 'brisbane',
        location: {
          latitude: -27.470125,
          longitude: 153.021072
        }
      },
      {
        id: '2',
        name: 'Adelaide',
        slug: 'adelaide',
        location: {
          latitude: -34.92123,
          longitude: 138.599503
        }
      }
    ];

    renderWithTheme(<Map places={places} />);

    expect(screen.getByTitle(/brisbane/i)).toBeInTheDocument();
    expect(screen.getByTitle(/adelaide/i)).toBeInTheDocument();
  });
});
