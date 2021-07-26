import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './services/reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhance = window._REDUX_DEVTOOTLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(RootReducer,composeEnhance(applyMiddleware(thunk),composeWithDevTools()));


ReactDOM.render(
  <React.StrictMode>

  <Provider store = {store} >

    <App  />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
