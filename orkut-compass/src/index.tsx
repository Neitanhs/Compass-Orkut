import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.module.css';
import App from './App';
import Header from './components/header/header';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
