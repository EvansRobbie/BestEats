import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContextProvider from './context/Context';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
  <React.StrictMode>
  <Toaster position="top-center"  reverseOrder={false}/>
    <App />
  </React.StrictMode>
  </GlobalContextProvider>
);

