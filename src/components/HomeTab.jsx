import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, TrendingDown, PiggyBank, ArrowRight, CreditCard } from 'lucide-react';
import './HomeTab.css';

const HomeTab = () => {
  const navigate = useNavigate();

  const handleFixedDepositClick = () => {
    navigate('/fixed-deposit');
  };

  return (
    <div className="home-tab">
      <div className="header">
        <div className="welcome-section">
          <h1>Welcome back!</h1>
          <p>Here's your financial overview</p>
        </div>
        <div className="profile-avatar">
          <div className="avatar-circle">JD</div>
        </div>
      </div>

      <div className="balance-card">
        <div className="balance-header">
          <Wallet className="balance-icon" />
          <h2>Current Balance</h2>
        </div>
        <div className="balance-amount">
          <span className="currency">₹</span>
          <span className="amount">100</span>
        </div>
        <div className="balance-subtitle">
          Available for transactions
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">
            <CreditCard className="action-icon" />
            <span>Transfer</span>
          </button>
          <button className="action-btn">
            <TrendingDown className="action-icon" />
            <span>Pay Bills</span>
          </button>
          <button className="action-btn">
            <PiggyBank className="action-icon" />
            <span>Invest</span>
          </button>
        </div>
      </div>

      <div className="expenses-section">
        <div className="section-header">
          <h3>Recent Expenses</h3>
          <span className="view-all">View All</span>
        </div>
        <div className="expense-list">
          <div className="expense-item">
            <div className="expense-icon grocery">🛒</div>
            <div className="expense-details">
              <div className="expense-name">Grocery Shopping</div>
              <div className="expense-date">Today, 2:30 PM</div>
            </div>
            <div className="expense-amount">-₹2,450</div>
          </div>
          <div className="expense-item">
            <div className="expense-icon fuel">⛽</div>
            <div className="expense-details">
              <div className="expense-name">Fuel</div>
              <div className="expense-date">Yesterday, 6:15 PM</div>
            </div>
            <div className="expense-amount">-₹1,200</div>
          </div>
          <div className="expense-item">
            <div className="expense-icon food">🍕</div>
            <div className="expense-details">
              <div className="expense-name">Restaurant</div>
              <div className="expense-date">2 days ago</div>
            </div>
            <div className="expense-amount">-₹850</div>
          </div>
        </div>
      </div>

      <div className="fixed-deposit-section">
        <div className="section-header">
          <h3>Fixed Deposits</h3>
          <button className="view-all-btn" onClick={handleFixedDepositClick}>
            View Details <ArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className="fd-card" onClick={handleFixedDepositClick}>
          <div className="fd-header">
            <PiggyBank className="fd-icon" />
            <div className="fd-info">
              <div className="fd-name">Federal Bank FD</div>
              <div className="fd-maturity">Matures: May 2026</div>
            </div>
          </div>
          <div className="fd-details">
            <div className="fd-amount">
              <span className="currency">₹</span>
              <span className="amount">75,422</span>
            </div>
            <div className="fd-rate">8% p.a.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
