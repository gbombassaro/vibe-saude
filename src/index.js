import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import globalState from './globalState';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
