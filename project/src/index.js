import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const offersCount = 123;

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={offersCount}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
