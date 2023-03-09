import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red ,  grey} from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';
import { gridClasses } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: grey[900],
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
)


