import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './utility'
import { BrowserRouter } from 'react-router-dom';
import './config/axios';

const store = createStore(reducer,compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>       
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
