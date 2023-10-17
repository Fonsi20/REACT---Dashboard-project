import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatBoxComponent from './StatBoxComponent';

describe('<StatBoxComponent />', () => {
  test('it should mount', () => {
    render(<StatBoxComponent />);
    
    const statBoxComponent = screen.getByTestId('StatBoxComponent');

    expect(statBoxComponent).toBeInTheDocument();
  });
});