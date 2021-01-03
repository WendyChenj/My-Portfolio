import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#333333'
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Play',
      'Roboto',
      'sans-serif',
      '-apple-system',
    ].join(','),

    body1: {
      fontSize: '16px',
      fontWeight: '400'
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
    h4: {
      fontSize: '2.0rem',
      fontWeight: '800'
    },
    h3: {
      fontSize: '3rem',
      fontWeight: '900'
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
