import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/styles.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const portServerNum = 8000;
const express = require('express');
const cors = require('cors');

const appex = express();
appex.listen(
  8000, () => console.log(`Server running on port ${portServerNum}`)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
       <App />
    </QueryClientProvider>
    </React.StrictMode>
);
