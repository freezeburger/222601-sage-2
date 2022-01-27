import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureEdition from './FeatureEdition';

describe('<FeatureEdition />', () => {
  test('it should mount', () => {
    render(<FeatureEdition />);
    
    const featureEdition = screen.getByTestId('FeatureEdition');

    expect(featureEdition).toBeInTheDocument();
  });
});