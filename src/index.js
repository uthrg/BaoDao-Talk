import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/poppins";
import "@fontsource/roboto";
import './index.css';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';
import Page6 from './Page6.js';
import Footer from './Footer.js';

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Footer />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);