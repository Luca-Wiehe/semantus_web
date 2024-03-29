import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/utils/index.css';
import App from './pages/App';

import { BaseContextProvider } from "./utils/FirebaseContext";
import { AuthContextProvider } from "./utils/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BaseContextProvider>
        <AuthContextProvider>
           <App />
        </AuthContextProvider>
     </BaseContextProvider>
  </React.StrictMode>
);
