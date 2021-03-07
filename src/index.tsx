import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import GlobalProvider from './contexts/Global';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

reportWebVitals();
