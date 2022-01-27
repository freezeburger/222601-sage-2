import React, { lazy, Suspense } from 'react';

const LazyFeatureList = lazy(() => import('./FeatureList'));

const FeatureList = props => (
  <Suspense fallback={null}>
    <LazyFeatureList {...props} />
  </Suspense>
);

export default FeatureList;
