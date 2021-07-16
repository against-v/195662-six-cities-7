import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import {checkAuth, getOffersList} from './store/api-actions';
import thunk from 'redux-thunk';
import rootReducer from './store/root-reducer';
import App from './components/app/app';
import {requireAuthorization} from './store/action';
import {redirect} from './store/middlewares/redirect';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument(api),
    redirect,
  ),
);

store.dispatch(checkAuth());
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
