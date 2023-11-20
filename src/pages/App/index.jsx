import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage';
import NewOrderPage from '../NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar';

import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { 
      user ? 
      <>
        <NavBar />
        <Routes> 
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes> 
      </>
      : 
      <AuthPage /> 
      }
    </main>
  );
}
