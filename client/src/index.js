import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
 
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <CartProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
      </CartProvider>
    </BrowserRouter>
    </QueryClientProvider>

);
reportWebVitals();

// Unused dependencies
// @material-ui/core
// @testing-library/user-event
// auto-bind
// crypto
// crypto-js
// node-polyfill-webpack-plugin
// react-material-ui-carousel
// react-paginate
// react-query
// react-query-devtools
// semantic-ui-css
// semantic-ui-react
// styled-components
// @mui/styled-engine-sc