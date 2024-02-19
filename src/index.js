import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto";
// import './index.css';
import Homepage from './homepage/app.js';

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <Homepage />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);