import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import cocktails from './store/reducers/cocktails';
import thunk from 'redux-thunk';

import { firestore } from './firebase/config';

const store = createStore(
  cocktails,
  compose(
    applyMiddleware(thunk.withExtraArgument({ firestore })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
