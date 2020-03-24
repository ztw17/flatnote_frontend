import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import combineReducers from './reducers/index'
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const reducer = () => {
//   return {
//     hello: 'world'
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);