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
import { AuthProvider } from './components/Context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
 
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>

);
reportWebVitals();
