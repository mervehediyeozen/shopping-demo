import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Stil dosyasını import ettik
import App from './App';  // Ana App bileşenini import ettik
import { BrowserRouter as Router } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import {Provider} from 'react-redux'
import { store } from './app/store';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Colors/theme";
import { LangContextProvider } from './Contexts/LanguageContext';
import { ProductsProvider } from './Contexts/ProductsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <ChakraProvider theme={theme}>  
      <Router>
         <LangContextProvider>
          <ProductsProvider>
        <Provider store={store}>
        <App /> 
       </Provider>
       </ProductsProvider>
        </LangContextProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);