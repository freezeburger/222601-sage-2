import React from 'react';
import PropTypes from 'prop-types';

import { ActionTypes, useStore } from '../../../logic';


const FeatureLogin = () => {

  const [ state, dispatch] = useStore();
  const handleClick = () => dispatch({ type: ActionTypes.TIME_UPDATE });
  
  return (
    <div data-testid="FeatureLogin">
      FeatureLogin Component
      <br />
      <code>{state.time}</code>
      <br />
      <button onClick={handleClick}>Update Time</button>
    </div>
  );

}

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
