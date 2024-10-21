import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.css';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;
