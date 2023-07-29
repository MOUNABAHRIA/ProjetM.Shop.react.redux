import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './redux/Store'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/react-toastify.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer theme='dark' position='top-right' 
      autoClose={3000} closeOnClick 
      pauseOnHover={false} 
      >

      </ToastContainer>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
