import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PieChartComponent from './PieChartComponent';

describe('<PieChartComponent />', () => {
  test('it should mount', () => {
    render(<PieChartComponent />);
    
    const pieChartComponent = screen.getByTestId('PieChartComponent');

    expect(pieChartComponent).toBeInTheDocument();
  });
});