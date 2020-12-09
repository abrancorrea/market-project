import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '*:focus': {
        boxShadow: 'none !important'
      }
    }
  },
  colors: {
    brand: {
      50: '#d9fffa',
      100: '#adfff0',
      200: '#7dffe6',
      300: '#4dffdc',
      400: '#25ffd2',
      500: '#13e6b8',
      600: '#00b38f',
      700: '#008066',
      800: '#004e3c',
      900: '#001c13'
    }
  }
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
