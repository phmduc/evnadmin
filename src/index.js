import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n/config';
import reportWebVitals from './reportWebVitals';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <>
  {/* // <React.StrictMode> */}
  <ToastContainer />
    <App />
  {/* // </React.StrictMode>, */}
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
