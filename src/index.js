import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cocktails from './store/reducers/cocktails';

const store = createStore(cocktails, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
