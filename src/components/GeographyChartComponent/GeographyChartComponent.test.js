import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GeographyChartComponent from './GeographyChartComponent';

describe('<GeographyChartComponent />', () => {
  test('it should mount', () => {
    render(<GeographyChartComponent />);
    
    const geographyChartComponent = screen.getByTestId('GeographyChartComponent');

    expect(geographyChartComponent).toBeInTheDocument();
  });
});