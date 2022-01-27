import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureList from './FeatureList';

describe('<FeatureList />', () => {
  test('it should mount', () => {
    render(<FeatureList />);
    
    const featureList = screen.getByTestId('FeatureList');

    expect(featureList).toBeInTheDocument();
  });
});