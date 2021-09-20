import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



ReactDOM.render(
  <React.Fragment>
    <AlertProvider template={AlertTemplate}>
    <App />
    </AlertProvider>
  </React.Fragment>,
  document.getElementById('root')
);
