import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { GlobalStyle } from 'components/App/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
       <App />
      </BrowserRouter>
  </React.StrictMode>
);
