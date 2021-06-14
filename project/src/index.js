import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const offerCount = 123;

ReactDOM.render(
  <React.StrictMode>
    <App
      offerCount={offerCount}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
