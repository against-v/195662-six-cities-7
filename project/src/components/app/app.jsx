import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';

function App({placeCount}) {
  return (
    <MainScreen
      placeCount={placeCount}
    />
  );

}

App.propTypes = {
  placeCount: PropTypes.number.isRequired,
};

export default App;
