import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';
import GlobalStyle from './App/config/globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();