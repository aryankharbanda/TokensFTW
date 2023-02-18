import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ARCANA
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
console.log(process.env.REACT_APP_ARCANA_APP_ID)
const provider = new AuthProvider(process.env.REACT_APP_ARCANA_APP_ID) // App address

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProvideAuth provider={provider}>
            <App />
        </ProvideAuth>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
