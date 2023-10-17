import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressCircleComponent from './ProgressCircleComponent';

describe('<ProgressCircleComponent />', () => {
  test('it should mount', () => {
    render(<ProgressCircleComponent />);
    
    const progressCircleComponent = screen.getByTestId('ProgressCircleComponent');

    expect(progressCircleComponent).toBeInTheDocument();
  });
});