import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BarChartComponent from './BarChartComponent';

describe('<BarChartComponent />', () => {
  test('it should mount', () => {
    render(<BarChartComponent />);
    
    const barChartComponent = screen.getByTestId('BarChartComponent');

    expect(barChartComponent).toBeInTheDocument();
  });
});