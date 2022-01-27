import React, { lazy, Suspense } from 'react';

const LazyFeatureEdition = lazy(() => import('./FeatureEdition'));

const FeatureEdition = props => (
  <Suspense fallback={null}>
    <LazyFeatureEdition {...props} />
  </Suspense>
);

export default FeatureEdition;
