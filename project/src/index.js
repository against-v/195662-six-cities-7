import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const placeCount = 123;

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCount={placeCount}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
