import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


import App from './App.jsx'
import './reset.css'
import { persistor, store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
