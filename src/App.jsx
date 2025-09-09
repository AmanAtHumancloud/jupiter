import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PinAuth from './components/PinAuth';
import MainLayout from './components/MainLayout';
import HomeTab from './components/HomeTab';
import MoneyTab from './components/MoneyTab';
import SettingsTab from './components/SettingsTab';
import FixedDepositDetails from './components/FixedDepositDetails';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePinSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PinAuth onPinSuccess={handlePinSuccess} />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeTab />} />
            <Route path="money" element={<MoneyTab />} />
            <Route path="settings" element={<SettingsTab />} />
          </Route>
          <Route path="/fixed-deposit" element={<FixedDepositDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;