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