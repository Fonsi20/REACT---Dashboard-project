import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineChartComponent from './LineChartComponent';

describe('<LineChartComponent />', () => {
  test('it should mount', () => {
    render(<LineChartComponent />);
    
    const lineChartComponent = screen.getByTestId('LineChartComponent');

    expect(lineChartComponent).toBeInTheDocument();
  });
});