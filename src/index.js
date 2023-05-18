import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Basket from './Pages/Basket';
import Products from './Pages/Products';
import Posts from './Pages/Posts';

import {Provider} from 'react-redux'
import {store} from "./store/store"
import {BrowserRouter} from "react-router-dom";

// const defaultState = {
//   count: 0
// }

// const reducer =  (state = defaultState, action) => {
//   switch(action.type) {
//     case 'PLUS_COUNT':
//     return {
//       ...state,
//       count: state.count + 1
//     }
//     case 'MINUS_COUNT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
