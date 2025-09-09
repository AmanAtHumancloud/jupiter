import React, { useState } from 'react';
import { Lock, Shield } from 'lucide-react';
import './PinAuth.css';

const PinAuth = ({ onPinSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePinChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setPin(value);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (pin === '1234') {
        onPinSuccess();
      } else {
        setError('Invalid PIN. Please try again.');
        setPin('');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="pin-auth-container">
      <div className="pin-auth-card">
        <div className="auth-header">
          <div className="logo">
            <Shield className="logo-icon" />
            <h1>Jupiter</h1>
          </div>
          <p className="subtitle">Secure Banking Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="pin-form">
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              value={pin}
              onChange={handlePinChange}
              placeholder="Enter your PIN"
              className="pin-input"
              maxLength="4"
              autoFocus
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="submit-button"
            disabled={pin.length !== 4 || isLoading}
          >
            {isLoading ? 'Verifying...' : 'Access Account'}
          </button>
        </form>

        <div className="security-note">
          <p>🔒 Your banking information is protected with bank-level security</p>
        </div>
      </div>
    </div>
  );
};

export default PinAuth;
