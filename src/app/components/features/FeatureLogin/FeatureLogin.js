import React from 'react';
import PropTypes from 'prop-types';

import { ActionTypes, store } from '../../../logic';

console.groupCollapsed('Data From Store')

/* console.log(store);
console.log( store.getState() );

store.dispatch({type:ActionTypes.TIME_UPDATE})
console.log( store.getState() );

console.groupEnd() */


const FeatureLogin = () => {

  const [time, setTime] = React.useState(store.getState().time);

  const handleClick = () => {
    store.dispatch({ type: ActionTypes.TIME_UPDATE });
    setTime(store.getState().time)
  }

  return (
    <div data-testid="FeatureLogin">

      FeatureLogin Component
      <br />
      <code>{time}</code>
      <br />
      <button onClick={handleClick}>Update Time</button>

    </div>
  );

}

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
