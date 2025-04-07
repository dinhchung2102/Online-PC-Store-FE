import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme.js'
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======

import { Provider } from 'react-redux';
import { store } from './redux/store';

>>>>>>> 47a5af1d14d3c7082fc3690e8080874fcdc590db
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
    
      <CssBaseline />
<<<<<<< HEAD
      <BrowserRouter>
      <App />
      </BrowserRouter>
      
=======
      <Provider store={store}>
        <App />
      </Provider>
>>>>>>> 47a5af1d14d3c7082fc3690e8080874fcdc590db
    </CssVarsProvider>
  </React.StrictMode>
)
