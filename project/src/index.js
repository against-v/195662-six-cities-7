import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import {getOffersList} from './store/api-actions';
import thunk from 'redux-thunk';

const api = createAPI(
  () => ({})
);

import App from './components/app/app';
import reducer from './store/reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

store.dispatch(getOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App/>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
