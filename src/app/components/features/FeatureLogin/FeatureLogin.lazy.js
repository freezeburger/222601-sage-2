import React, { lazy, Suspense } from 'react';

const LazyFeatureLogin = lazy(() => import( /* webpackChunkName : "feature.login" */ './FeatureLogin'));

const FeatureLogin = props => (
  <Suspense fallback={"Loading PLease Wait..."}>
    <LazyFeatureLogin {...props} />
  </Suspense>
);

export default FeatureLogin;
