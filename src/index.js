import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCampers} from './actions/actions';

const store= configureStore();
store.dispatch(loadCampers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
