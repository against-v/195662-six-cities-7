import React from 'react';
import PropTypes from 'prop-types';

import Home from '../home/home';

function App({placeCount}) {
  return (
    <Home
      placeCount={placeCount}
    />
  );

}

App.propTypes = {
  placeCount: PropTypes.number.isRequired,
};

export default App;
