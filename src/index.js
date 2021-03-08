import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {createStore} from "redux"

const globalState = {
  totalOrder : 0
}

// reducer
const rootReducer = (state = globalState, action) => {
  switch(action.type) {
    case "PLUS_ORDER" : 
      return {
        ...state,
        totalOrder : state.totalOrder + 1
      }
    case "MINUS_ORDER" : 
      if(state.totalOrder > 0){
        return {
          ...state,
          totalOrder : state.totalOrder - 1
        }
      }
    default : 
    return state
  }
}

// store
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
